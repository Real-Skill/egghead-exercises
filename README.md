# Exercise 9 : Directives 

## Summary
This application requires you to change the element behaviour based on the specific event. You are supposed to write four directives that bind events to two provided 
canvas. 

## Goals
When you move your mouse over the provided circle (check comments) bootstrap class should be added. It should be handled by `enter` directive.
When you leave the area, it should be removed back (use `leave` directive to remove the class). 


Secondly, when you click the square it should add the provided class to the square (using `clickOn` directive) and when you double click - it should be removed
 (using `dbClickOn` directive).

 
 Please be aware that you should be able to pass the specified bootstrap class as an argument to the directive:
 
* **index.html** should be fixed to achieve the correct behaviour for the circle and square mentioned above (also check comments)

* ***btn-danger*** passed as an attribute to enter and leave directive

* ***btn-info*** passed as an attribute to dbClickOn and clickOn directive


**Hint**: `camelCase` directives should be used inside .html files in such a way: `camel-case`  

## Before you start, please refer to
* [angularjs-basic-behaviors](https://egghead.io/lessons/angularjs-basic-behaviors)
* [angularjs-useful-behaviors](https://egghead.io/lessons/angularjs-useful-behaviors)
* [jquery/bind](http://api.jquery.com/bind/)


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
