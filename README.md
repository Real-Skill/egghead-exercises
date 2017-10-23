# Exercise 15 : Isolated Scope Review

## Summary
Use the arcane knowledge of scope isolation to successfully complete the task. You are provided with an unfinished template (`boxTemplate.html`) 
with a form. Implement a directive that will allow you to set the size of the box in each form, set colour in all forms when you change it in one, and
display information about the box. 

## Goals
* use `size`, `color`, `open` as names of isolated scope properties 
* color should be selected from the list
* button in each of the forms should show an alert with information about the name, size and colour of a specific form
* display size of the box in **h3** tag
* the size of the displayed box should change according to the size property and you should add appropriate attribute to `ng-style="{\'background-color\':color}"` 
* use the directive to create three forms with different box sizes (50px,70px,90px)

### Before you start, please refer to
* [angularjs-isolate-scope-review](https://egghead.io/lessons/angularjs-isolate-scope-review)

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
