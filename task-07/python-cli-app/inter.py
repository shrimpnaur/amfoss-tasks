import click
import os
import requests

@click.command()
@click.argument('filename')
def process_file(filename):
    if filename.startswith("http://") or filename.startswith("https://"):
        # Handle URL
        click.echo(f"Downloading file from URL: {filename}")
        local_filename = download_file(filename)
        click.echo(f"File downloaded as: {local_filename}")
    elif os.path.exists(filename):
        # Handle local file
        click.echo(f"Processing local file: {filename}")
    else:
        click.echo("Error: Invalid file or URL provided")

def download_file(url):
    local_filename = url.split('/')[-1]
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename

if __name__ == '__main__':
    process_file()

