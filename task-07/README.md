## CLI APP FOR DOWNLOADING SUBTITLES:
This app was truly very confusing and a little mind twisting for me, had to give up a lot of times. Will be honest that I had to take a lot of help but after it worked, I understood the  code completely and the logic behind it.
It was fun in its own way and kept me engaging throughout the process.

## Process :
1) imported all the requirements for the app (request, imdb, beautifulsoup4, click, hashlib, os)
2) Made the click interface to show various options that can be provided to the command (saw youtube videos and a few articles to understand the syntax)
3) Defined function to process a directory (files in it) or single files.
4) Defined function to find the imdb id by using the IMDb library to search for the movie by name.
5) Defined functions to compute hash, scrape subtitles ( which basically sends a request to parse the html for subtitles )
6) Defined function for downloading subtitles from the given list by providing the option number.
   https://www.geeksforgeeks.org/implementing-web-scraping-python-beautiful-soup/ took a bit of help to understand web scraping code.

I still believe I can learn a lot from this one single project and would love to do so in future.

## Problems I faced:
I had faced a lot of problem in which the first code that I  hade implemented never was able to give me the subtitle option. It would find the imdb code and then say "No subtitles found"
For this issue I checked with the opensubtitles website and found out that the imdb was showing a completely different film at first, and that this example movie had a different 'idmovie' which was different from my imdb hence it couldnt scrape it. But then I checked with finding subtitles through the name of the movie, then I also tried to use opensubtitles.com API but nothing seemed to work. Even tried an alternative website to opensubtitles but that also did not work properly until the code I was able to implement at last. And finally was able to complete this task.
