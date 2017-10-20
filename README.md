# Exercise 19: Building Zippy

## Summary 
This application displays the basic directive component used for donating money for whatever cause you want.
Complete `money` directive functionality using the acquired knowledge about ng-model, ng-click and transclusion (without controller).

## Goals
* content button text should be automatically updated when the text is entered into the `forWhat` field
* selection of the amount should automatically update ***I want to devote: $x*** paragraph (where **x** is the selected amount)
* message `Shut up and take my money!` should appear when you press the button and hide when you press it again (create and use `toggleContent` function)
* use `forWhat` and `howMany` as the names of isolated scope variables 

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
