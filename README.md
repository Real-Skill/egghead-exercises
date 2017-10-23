# Exercise 14 : Directive to Directive Communication

## Summary
In this exercise, your challenge is to share information between directives. 

You are supposed to create four directives:
`alarm` (main directive with controller), `red`, `yellow` and `green`.

Implement a functionality that will allow you to call alerts, when you click on the red circle, double click on the yellow circle and when the mouse hovers over the 
green circle. 

## Goals
* the main directive should have a controller with three functions (with names like pattern **addColorName**)
* the content of the alarms is a simple message ***"ColorName alarm!"***
* the directive must be used in prepared div elements (check comment)
 
## Before you start, please refer to
 * [angularjs-directive-to-directive-communication](https://egghead.io/lessons/angularjs-directive-to-directive-communication)

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
    
To run e2e tests in development mode:

    grunt test:e2e

To run jshint, tests and coverage:

    npm test

Good luck!
