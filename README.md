# Exercise 43 : Unit Testing AngularJS

## Summary
In this application, you are supposed to create tests to three simple filters `star`, `withoutSpace` and `onlyFirstLetterUp`.

## Goals
* write unit tests to test:
    * `star` filter that wraps the text with stars
    * `withoutSpace` filter that removes all spaces
    * `onlyFirstLetterUp` filter that converts the first letter of the sentence to the large ones
    
* complete `filter` describe with three describes that correspond to the filter's name 
* don't forget about adding the model before test cases

## Before you start, please refer to:
* [angularjs-testing-overview](https://egghead.io/lessons/angularjs-testing-overview)

## Setup

### To install dependencies 

    yarn install
    bower install

### To start application in live reload mode

    grunt serve
    
### Jshint
To run verify jshint:
    
    grunt jshint:default

### Run tests

To unit tests in development mode:
    
    grunt test:dev
    
To run verify jshint, tests and coverage:

    yarn test
    
To run mutation tests:

    yarn run mutation

Good luck!
