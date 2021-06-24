# Mood-of-the-Nation

IBM wanted a service to help them understand the ‘Happiness’ of various universities with their interactions by analysing the tweets related to IBM and a particular university. IBM therefore wanted to us to create a web application that would include the following features:

-	A map visualisation showing where tweets are coming from
-	A topic word cloud displaying the top 20 words used
-	A geographic word cloud highlighting city and county names mentioned in tweets. 
-	A display showing the average happiness score of a collection of tweets for each university. IBM wanted the webpage to make use of IBM’s Natural Language       Understanding API for this. 

In addition to IBM’s specifications for the website, we added a search bar feature to allow users to search for and analyse any collection of tweets.



**Files in the Repo**

- MoodoftheNation.json

JSON export of our Node-RED flow which was used to search and store tweets into our database, perform the data analysis (sentiment analysis and word cloud processing), store the results of the data analysis in Firestore and to create our webpage using HTML, CSS and JavaScript.

- websitetemplate.html

This file contains all the html, css and javascript used to design the website

- 20MostCommonWords.js

This file contains the function to find the 20 most common words in a collection of tweets. 

- Locations mentioned in Tweets

This file contains the function to find all the locations mentioned in tweets. 
   



