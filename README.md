# Exercise 34b: "Controller as" Syntax

## Summary
Setting data on scope is dangerous because it makes available everywhere, wherefore used setting data on controller and simplifies access to the this data new structure.

## Goals
* replace all use **$scope** inside **AppCtrl**, **UnSuccessCtrl**, **SetCtrl** controllers
* the application should work the same as before the change

## Before you start, please refer to:
* [angularjs-experimental-controller-as-syntax](https://egghead.io/lessons/angularjs-experimental-controller-as-syntax)

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
