## Exercise 41 : Introduction to ui-router

## Summary
Create navigation to the application displaying the most popular paintings. Use an alternative to AngularJS's default  routing module `ui-router`. The 
application consists of three main parts : **Start** - the welcome page, **Vertical Paintings** - displays the known vertical paintings, **Horizontal 
Paintings** - displays the known horizontal paintings. Each paining has some details that should be displayed after clicking on chosen painting.


Controllers and `welcome.html`, `paintingDetails.html` pages are ready.

## Goals 
* you should implement three main states: `start`, `vPaintings`, `hPaintings`
* connect navigation button with states 
* configure routing knowing that the state name is associated with url path
* add `detail` state for `vPaintings` and `hPaintings` states
* add `ng-href` with appropriate path to each paining list

## Before you start, please refer to:
* [angularjs-introduction-ui-router](https://egghead.io/lessons/angularjs-introduction-ui-router)

## Setup
### To install dependencies 

    yarn install
    bower install
    npm run webdriver-manager-update

### To start application in live reload mode

    grunt serve
    
### Jshint
To run verify jshint:
    
    grunt jshint:default

### Run tests

To unit tests in development mode:
    
    grunt test:dev
    
To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    yarn test

Good luck!
