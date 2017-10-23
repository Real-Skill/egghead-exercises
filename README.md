# Exercise 1 : Binding

## Summary
This application displays three inputs and an artist's table. Each class attributes to the row which is bound to one of the input values by order. Inputting a text will result in a colour change of the table row.

## Goals
You are required to implement a solution that will result in such a behaviour:
an input value should be taken as a table row class attribute, so after typing 'warning' in the first input, the first table row should be displayed with a
 class warning. This implies that the other inputs and rows behave the same.

### Before you start, please refer to
* [angularjs-binding](https://egghead.io/lessons/angularjs-binding)
* **bootstrap classes** are used for colouring table rows [contextual classes](http://getbootstrap.com/css/#tables)

### + Bonus task
Try to connect input fields with columns of the table.

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
