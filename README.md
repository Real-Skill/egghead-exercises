## Exercise 52: transformResponse

## Summary
You start with broken application that should displayed list of GitHub users (with avatar, login, url repository and GitHub user type). All you need to do is
 transform response data from `https://api.github.com/users` to reach specific data

## Goals
* `apiResponse` factory should transform response data to form only with avatar, login, url repository and GitHub user type
* `api` factory should use transformed data
* take a look at ready view to get names of `user` properties

## Before you start, please refer to:
* [angularjs-transformresponse](https://egghead.io/lessons/angularjs-transformresponse)

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

Good luck !
