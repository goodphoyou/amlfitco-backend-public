This back-end API is built with NodeJS, Express, and Okta API. It is deployed with a Docker container through Heroku.

The back-end serves up course files and testimonials for the [amlfitco website](https://mounirlazzouni.com/)

It also contains the back-end API call to Okta for creating users. If you want to set up this API, please create an Okta developer account and create an API token with your app.

API calls are made with Axios on the front end.

# File structure for the courses are below.

Courses will go in one giant folder.

Each Section is represented by a folder. Each folder has an id.txt folder and folders representing individual lessons.

Each lesson is represnented by a folder with 4 files.\
heading.txt\
title.txt\
video.txt\
attachment.txt\
content.md

Txt files should just include a string, for video.txt and attachment.txt just the link to the vimeo file.

Markdown guides \
https://www.markdownguide.org/basic-syntax/ \

https://www.markdownguide.org/cheat-sheet/

