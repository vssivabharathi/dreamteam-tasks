import requests
import os
import bs4

url = 'https://xkcd.com'
os.makedirs('xkcd', exist_ok=True)

while not url.endswith("#"):
    # Download the page:
    print("Downloading the webpage: %s" % url)
    res = requests.get(url)
    res.raise_for_status()

    # Parse the HTML page using BeautifulSoup
    soup = bs4.BeautifulSoup(res.text, "html.parser")

    # Finding the URL of the comic image
    comicElem = soup.select("#comic img")
    if comicElem == []:
        print('Could not find the comic image')
    else:
        comicUrl = 'https:' + comicElem[0].get("src")

        # Download the image
        print("Downloading the image %s...." % (comicUrl))
        res = requests.get(comicUrl)
        res.raise_for_status()

        # Save the image
        imageFile = open(os.path.join('xkcd', os.path.basename(comicUrl)), "wb")
        for chunk in res.iter_content(100000):
            imageFile.write(chunk)
        imageFile.close()

    # Get the previous button's URL
    prevLink = soup.select('a[rel="prev"]')[0]
    url = 'https://xkcd.com' + prevLink.get("href")

print('Done.')
