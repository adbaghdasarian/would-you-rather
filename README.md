
** Would You Rather**
This is a simple redux web application. All data is stored internally in a data JS file. The client can log in as one of the available users and answer would you rather questions!

##INSTALLATION

clone this repo into a new folder on your computer.


On the command line in the same directory, run `npm install` or `yarn add` to add dependencies.

run `npm start` or `yarn start` to begin the server. Enjoy this project on your local host!


##LAYOUT


####HOME PAGE
The home page renders a list of available questions. The left tab returns your unanswered questions, and the right tab renders your already answered question.

####QUESTION PAGE

Click on the question to visit it's page. Vote here!

Once a question is answered you can view the poll results and your own answer will be highlighted in blue.

When you answer a question your score will go up by one.

####NEW QUESITON PAGE

The new question page at /add allows you to add new questions! Input the choices in the left and right text inputs, and press submit to be rerouted to the home page.

When you ask a new question your score will go up by one.

###LEADERBOARD

at /leaderboard you can find the score and ranking of each user. A score is a combination of questions asked and questions created


**That's it! Enjoy Would You Rather!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


