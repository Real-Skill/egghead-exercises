## Exercise 30 : Providers

## Summary
Application displays sentence with `color` and `number` set by the factory. Your job is refactor the `Home` factory to provider. This will give you the same result but it is a different method to achieve it.

## Goals
* `number` should be equal to 100 when set number is even or 99 when set number is odd
* `number` and `color` should be easily set using provider in application configuration 
* create `setColor` and `setNumber` functions inside provider

## Before you start, please refer to:
* [angularjs-providers](https://egghead.io/lessons/angularjs-providers)

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
 
Good luck!
