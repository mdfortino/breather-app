# Project-2
## Description
Breather is an app for teams to cultivate mindfulness through intention setting and a collection of free resources for practicing meditation. Whether you’re a part of a team of athletes or coworkers, Breather allows you to take the time to breathe and cultivate awareness in order to bring more meaning and purpose to your mission.

## Example
![screenshot](img//Users/gamacbook/wdi/projects/Project-2/img/Screen Shot 2019-02-01 at 1.21.43 PM.png)
 

## Features
There are features for setting intention and for saving to a collection of guided meditations. Additionally, login and logout capabilities were built via passport authentication. 
## Technologies Used
* MongoDB/Mogoose
* Express
* Handlebars
* Node
* CSS
* Heroku

##Installation/Getting Started
You can access the link through heroku: https://breatherapp.herokuapp.com/ or via the following installation steps:
1. To install all necessary dependencies, run :
```
$ npm install
```
2. then launch the server on port 3333 using: 
```
$ nodemon
```
3. To access the data launch MongoDB and in a new tab use mongo to fin all users in the database
```
$ mongod
```
```
$ mongo
```
```
```
$ show dbs
$ use db.BE
$ db.users.find().pretty()
```
## Unsolved Problems
Future improvements include adding the functionality for the user to be able to add to the collection of meditations and for the data to be saved and rendered in the view. Currently, the data is being saved; however, issues need to be resolved to have it render in the view. I would also like to change the layout of the homepage potentially. 
## Contribution Guidelines 
To contribute to the code, identify bugs, and propose improvements, please see the below links: 
Link to project’s main repository: https://github.com/mdfortino/Project-2 Link to project’s issue tracker: https://github.com/mdfortino/Project-2/issues
