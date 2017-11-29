## Exercise 31 : Injectors

## Summary
Application should display song details and two buttons `Sing` and `Fake`. The application at this moment is not working correctly, the song is not displayed and the buttons are not working. Your job is to bind values from the `Song` factory to the proper models in the view using the `$injector`.

## Goals
* use $injector to get the data from `Song` factory.
* bind `author`, `title`, `sing` and `fake` factory properties to the relevant controller fields.

## Before you start, please refer to:
* [angularjs-injectors](https://egghead.io/lessons/angularjs-injectors)

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

To unit tests in development mode:
    
    grunt test:dev
    
To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    yarn test


Good luck!
