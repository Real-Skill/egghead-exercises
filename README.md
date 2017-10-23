# Exercise 3 : Sharing data between controllers

## Summary
Controllers often need to communicate and share data with each other. You are given a task to create a functionality to share data between two controllers.
Modify `index.html` file to enable sharing data between `LeftCtrl` and `RightCtrl`.

## Goal
Use **ng-model** in appropriate places to make sure that after typing something in left or right input, both message holders are updated. Remember that all inputs 
should be bound to the same property. Don't change the `controllers.js` file.

**Hint**
Take a look at `ng-init` directive in `index.html` file

## Before you start, please refer to
* [angularjs-the-dot](https://egghead.io/lessons/angularjs-the-dot)

## Setup
 
### To install dependencies

    npm install
    
    bower install

### To start application in live reload mode

    grunt serve
    
### Jshint
To run jshint:
    
    grunt jshint:default

### Run tests

To run e2e tests in development mode:

    grunt test:e2e

To run jshint, tests and coverage:

    npm test


Good luck!
