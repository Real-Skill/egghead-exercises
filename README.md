## Exercise 35 : Directive Communication

## Summary
You start with three ready directives (`vehicle`, `car` and `bus`) and two uncompleted directives (`audi` and `jelcz`).
**Car** and **bus** are two types of **vehicle** - moreover it can be said that **audi** is a typical **car** brand while **jelcz** is a typical **bus** brand. 
This means that `audi` directive (after appropriate configuration) may use the data from `car` and `vehicle` -  just like `jelcz` directive which should use 
data from `bus` and `vehicle`.

## Goals
* add directives to `index.html` based on the summary description (you should see at the view car on the left and bus on the right)
* add required property to **audi** and **jelcz**
* when `Drive` button is pressed, you should see message: `I am fast ... etc.` (into **h3** tags)
* when `Emergency brake` button is clicked and emergency brake exist for this kind of vehicle, you should see alert message: `Beeeeeeep!`
* when `Seat belts` button is clicked and seat belts exist for this kind of vehicle, you should see alert message: `Click!`

## Before you start, please refer to:
* [angularjs-directive-communication](https://egghead.io/lessons/angularjs-directive-communication)

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

