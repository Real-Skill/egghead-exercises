# Exercise 32 : Components And Containers

## Summary
You start work with three "book-about" ready directives : `bookTitle`, `bookDescription` and `bookPages`. Use them to create a book consisting of a title, description and number of pages (in this order).

## Goals
* `book` component should be used as a container 
* set book title component with the following text **The Da Vinci Code**
* the number of pages should be **454** 
* **remember!** you are not supposed to put the book title etc. inside the `book` directive template


## Before you start, please refer to:
* [angularjs-components-and-containers](https://egghead.io/lessons/angularjs-components-and-containers)


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
