---
permalink: /nhentai-api
---

# nhentai API docs
This is not an official documentation, but I figured it out and though other people might want to use it. This will also be a guide for how to use an API for complete beginners.

# Getting the data
To get the data from the API, you need to use the correct links.
The main link to use is obviously:

    https://nhentai.net
    
This will be different for other APIs. Don't try to get NASA info from a hentai site.

Here is a cheat-sheet for all of the links you can use to get data (I'll get on to what the stuff wrapped in brackets means):

### Search for comics

    /api/galleries/search?query={QUERY}

### Search for related comics

    /api/gallery/{BOOK_ID}/related

### Search for tag

    /api/galleries/tagged?tag_id={TAG_ID}
    
### Get details of a certain book

    /api/gallery/{BOOK_ID}

### Get page of book

    /galleries/{MEDIA_ID}/{PAGE}.jpg

### Get thumbnail of book

    /galleries/{MEDIA_ID}/{PAGE}t.jpg

### Get the cover of the book

    /galleries/{MEDIA_ID}/cover.jpg

The IDs define what book the API should give you. If you are an avid user of the [r/animemes](https://www.reddit.com/r/animemes) You will recognise what a {BOOK_ID} is. (Ahem, 177013 is a good example). 

This is completely separate from a {MEDIA_ID}. The {MEDIA_ID} is used to get the images associated with the book. Above, you can see that it is only used to get the page, thumbnail and cover images.

The {TAG_ID} is just a {BOOK_ID} but only for tags. Cool? Cool.

# Traversing the JSON
Scary! JSON looks really complicated to a beginner. This section will teach you how to look through the JSON to find the info you need.

Lets use the **SEARCH FOR COMICS** function as an example, I'm going to search for "female" (Creative I know!)
So I use the link:

    https://nhentai.net/api/galleries/search?query=female
This will give be a bunch of JSON that is a real strain on the eyes. I recomend using [this JSON viewer](http://jsonviewer.stack.hu/) to see the data more clearly.

I've extracted the first result that I got (YOU WILL GET MORE THAN ONE):

    {
	  "result": [
	    {
	      "id": 256228, <- THIS IS THE BOOK ID
	      "media_id": "1331007", <- THIS IS THE MEDIA ID
	      "title": {
	        "english": "[numa] Kiss wa \u00a5300",
	        "japanese": "[numa] \u30ad\u30b9\u306f\u00a5300",
	        "pretty": "Kiss wa \u00a5300"
	      },
	      "images": {
	        "pages": [
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          },
	          {
	            "t": "j",
	            "w": 1200,
	            "h": 1600
	          }
	        ],
	        "cover": {
	          "t": "j",
	          "w": 350,
	          "h": 467
	        },
	        "thumbnail": {
	          "t": "j",
	          "w": 250,
	          "h": 333
	        }
	      },
	      "scanlator": "",
	      "upload_date": 1545159725,
	      "tags": [
	        {
	          "id": 6346, <- THIS IS A TAG ID
	          "type": "language",
	          "name": "japanese",
	          "url": "/language/japanese/",
	          "count": 164713
	        },
	        {
	          "id": 7752,
	          "type": "tag",
	          "name": "schoolboy uniform",
	          "url": "/tag/schoolboy-uniform/",
	          "count": 10329
	        },
	        {
	          "id": 7970,
	          "type": "artist",
	          "name": "numa",
	          "url": "/artist/numa/",
	          "count": 16
	        },
	        {
	          "id": 10314,
	          "type": "tag",
	          "name": "schoolgirl uniform",
	          "url": "/tag/schoolgirl-uniform/",
	          "count": 47892
	        },
	        {
	          "id": 12695,
	          "type": "tag",
	          "name": "prostitution",
	          "url": "/tag/prostitution/",
	          "count": 4240
	        },
	        {
	          "id": 33172,
	          "type": "category",
	          "name": "doujinshi",
	          "url": "/category/doujinshi/",
	          "count": 185969
	        },
	        {
	          "id": 35762,
	          "type": "tag",
	          "name": "sole female",
	          "url": "/tag/sole-female/",
	          "count": 43471
	        },
	        {
	          "id": 35763,
	          "type": "tag",
	          "name": "sole male",
	          "url": "/tag/sole-male/",
	          "count": 38831
	        }]
	}
        
When you get the data from the API, you will be given a variable called "result". In that, you will find lots of books and ID's for them. Using this information, you can get all the images and data you need.

# GETing the data into your application

Seeing the JSON in your browser is all well and good, but how do you get it into your application.

You do this by using a GET request, other requests can be made but for this API all you need is a GET. The method of doing so varies between different languages but they all do the same thing.

Here are some guides for some popular programming and scripting languages:

 - Javascript & Node.js: https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
 - Java: https://www.mkyong.com/java/how-to-send-http-request-getpost-in-java/
 - C# (There may be some better Nuget packages to do this but HttpClient comes with .net soooo): https://www.quora.com/How-can-I-make-HTTP-get-a-request-in-C
 - Python: https://www.geeksforgeeks.org/get-post-requests-using-python/
 - PHP: http://php.net/manual/fa/function.http-get.php
 - Swift: https://www.twilio.com/blog/2017/08/how-to-make-http-requests-in-swift-3.html
Sorry for the lack of C++, I don't know the language, so I can't tell if the guide is good enough or not.

# Conclusion
Thank you for checking out my docs/guide on the nhentai api.  I'm not going to cover parsing JSON because there are so many libraries out there that will do it for you that a quick google search will show you how to do it.

With the knowledge I have bestowed upon you, go forth and create a bunch of Discord bots that get you hentai, or a Stack bot that gets you hentai, OR a Twitter bot that gets you hentai. 
Make a bunch of shitty hentai grabbin' bots and make the community proud.

Thank you,
EdgyBoi2414 (I should be revising)
