import click
import requests
from bs4 import BeautifulSoup
import os
import hashlib
import imdb

BASE_URL = "https://www.opensubtitles.org"

@click.group()
def main_cli():
    pass

@click.command()
@click.argument("movie_file", type=click.Path(exists=True))
@click.option("-l", "--language", type=str, help="Filter subtitles by language (e.g., eng for English).")
@click.option("-o", "--output", type=click.Path(), help="Specify the output folder for the subtitles.", default=".")
@click.option("-s", "--file-size", type=int, help="Filter subtitles by movie file size (in bytes).")
@click.option("-h", "--match-by-hash", is_flag=True, help="Match subtitles by movie hash.")
@click.option("-b", "--batch-download", is_flag=True, help="Enable batch mode (process all files in a directory).")
def download_subtitles(movie_file, language, output, file_size, match_by_hash, batch_download):
    if batch_download:
        subs_directory(movie_file, language, output, file_size, match_by_hash)
    else:
        subs_file(movie_file, language, output, file_size, match_by_hash)

def subs_directory(directory_path, language, output, file_size, match_by_hash):
    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith(('.mp4', '.mpeg4', '.avi')):
                file_path = os.path.join(root, file)
                click.echo(f"Processing file: {file_path}")
                subs_file(file_path, language, output, file_size, match_by_hash)

def subs_file(file_path, language, output, file_size, match_by_hash):
    """Process a single video file for subtitles."""
    movie_name = os.path.basename(file_path).rsplit('.', 1)[0]
    imdb_id = find_imdbid(movie_name)
    
    if not imdb_id:
        click.echo(f"IMDb ID could not be found for the movie: {movie_name}")
        return
    
    click.echo(f"IMDb ID for the movie: {imdb_id}")

    file_size_bytes = None
    hash_value = None
    if file_size or match_by_hash:
        file_size_bytes, hash_value = get_movie_file_info(file_path)
        click.echo(f"File size: {file_size_bytes} bytes")
        click.echo(f"File hash: {hash_value}")

    subtitles = search_subtitles_by_imdb_id(imdb_id, language, file_size_bytes, hash_value)

    if not subtitles:
        click.echo(f"No subtitles found for the movie with IMDb ID: {imdb_id}")
        return

    click.echo(f"Found {len(subtitles)} subtitles for the movie with IMDb ID: {imdb_id}:")
    for i, subtitle in enumerate(subtitles):
        click.echo(f"{i + 1}: {subtitle['title']} ({subtitle['language']})")

    choice = click.prompt("Enter the subtitle number you would like to download", type=int)
    if choice < 1 or choice > len(subtitles):
        click.echo("Invalid choice.")
        return

    selected_subtitle = subtitles[choice - 1]
    subtitle_url = f"{BASE_URL}{selected_subtitle['download_link']}"
    download_subtitle(subtitle_url, output)
    click.echo(f"Subtitle downloaded to {output}")

def find_imdbid(movie_name):
    ia = imdb.IMDb()
    search = ia.search_movie(movie_name)
    if search:
        imdb_id = search[0].movieID
        click.echo(f"Found IMDb ID: {imdb_id} for {movie_name}")
        return imdb_id
    return None

def get_movie_file_info(file_path):
    """Get the hash and file size of the movie file from the given file path."""
    file_size = os.path.getsize(file_path)
    
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            hash_md5.update(chunk)
    
    file_hash = hash_md5.hexdigest()
    return file_size, file_hash

def search_subtitles_by_imdb_id(imdb_id, language=None, file_size=None, hash=None):
    query = f"{BASE_URL}/en/search2/sublanguageid-{language or 'all'}/imdbid-{imdb_id}"
    click.echo(f"Search query: {query}")  
    response = requests.get(query)
    soup = BeautifulSoup(response.text, "html.parser")
    subtitles = soup.find_all("a", class_="bnone")
    
    filtered_subtitles = []
    for subtitle in subtitles:
        subtitle_details_url = f"{BASE_URL}{subtitle['href']}"
        details_response = requests.get(subtitle_details_url)
        details_soup = BeautifulSoup(details_response.text, "html.parser")
        
        subtitle_size_elem = details_soup.find("li", class_="size")
        subtitle_size = subtitle_size_elem.text.strip() if subtitle_size_elem else None
        
        subtitle_hash_elem = details_soup.find("li", class_="hash")
        subtitle_hash = subtitle_hash_elem.text.strip() if subtitle_hash_elem else None
       
        subtitle_size_bytes = int(subtitle_size.split()[0]) if subtitle_size else None
        
        if file_size and subtitle_size_bytes and subtitle_size_bytes != file_size:
            continue
        
        if hash and subtitle_hash and subtitle_hash != hash:
            continue
        
        filtered_subtitles.append({
            "title": subtitle.get_text(strip=True),
            "download_link": subtitle['href'],
            "language": details_soup.find("li", class_="language").text.strip() if details_soup.find("li", class_="language") else "unknown"
        })
    
    return filtered_subtitles

def download_subtitle(url, output_folder):
    response = requests.get(url)
    subtitle_file = os.path.join(output_folder, url.split('/')[-1])
    with open(subtitle_file, "wb") as f:
        f.write(response.content)
    return subtitle_file

main_cli.add_command(download_subtitles)

if __name__ == "__main__":
    main_cli()

