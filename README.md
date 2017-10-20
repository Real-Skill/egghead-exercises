# Exercise 17: An alternative approach to controllers

## Summary
An alternative approach to controllers assumes that the function should be assigned to the controller, not to the $scope.
Create `SumCtrl` and `SubCtrl` providing the basic math sum (`addition`)and subtract (`subtraction`) functions according to the requirements.

## Goals
* `Calc.js` should contain `SumCtrl` and `SubCtrl` controllers
* `SumCtrl` should have an `addition` function assigned to itself
* `addition` should consume two arguments and assign the result to `sum` variable
* `SubCtrl` should be like `SumCtrl` but should have `subtraction` function and should have the result assigned to `sub` variable instead
* each controller should have two variables (`firstNumber`, `secondNumber`) initialized with values **12** and **1**
* use `addition`  and `subtraction` functions to display the result in the correct header (check comments)

## Before you start, please refer to
* [angularjs-an-alternative-approach-to-controllers](https://egghead.io/lessons/angularjs-an-alternative-approach-to-controllers)

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

To run unit tests in development mode:
    
    grunt test:dev
    

To run jshint, tests and coverage:

    npm test


Good luck!
