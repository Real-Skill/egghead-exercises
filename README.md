# Exercise 26 : Promises

## Summary
The application allows you to add products and their amounts to the order. You see them only if you "resolve the order" - clicking the 'Resolve' button 
under the table.

## Goals
  * don't change `index.html` view 
  * `getItem` function should return the name of the specified index
  * `getQuantity` function should return the quantity of the specified index
  * `success` function should resolve promises from method `getItem` and `getQuantity`
  * use `index` variable in `success` function

## Before you start, please refer to:
* [angularjs-promises](https://egghead.io/lessons/angularjs-promises)
* [angularjs-resolve](https://egghead.io/lessons/angularjs-resolve)

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

To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    yarn test
    
Good luck!
