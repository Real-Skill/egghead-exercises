## Exercise 40 : angular.copy

## Summary
In this application something bad happened to the titles of images. Use `selectedReq`, `requirementCopy` angular variables and `angular.copy` to update data 
after you click on the image.


## Goals

Complete and use `update`, `save` functions to achieve the following results:

* click on the image should cause the appearance of **update input**
* enter text into the input should **not** automatically change the title of the image
* after clicking `Save` button title of the image is updated

## Before you start, please refer to:
* [angularjs-angular-copy-for-deep-copy](https://egghead.io/lessons/angularjs-angular-copy-for-deep-copy)

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
