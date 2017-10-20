# Exercise 25 : $routeProvider

## Summary
You are provided with templates and controllers. Use your knowledge of services such as `$routeProvider`, `$routeParams` to configure routing.

## Goals

* set `home.html` as a default page with appropriate controller (that initializes car brand and capacity) 
* brand and engine capacity from inputs should be used as route params (**hint:**  look at `home.html` "Next" button)
* **Next** button should redirect you to details.html page if both parameters are entered (the path should start with `details/`)
* there is a secret page - your job is to get us there 
* having entered the word `spy` in any of the fields, you should be directed to `secret.html` page  (**hint:** check if the path contains the word `spy`)


## Before you start, please refer to
* [angularjs-routeprovider-api](https://egghead.io/lessons/angularjs-routeprovider-api)
* [angularjs-routeparams](https://egghead.io/lessons/angularjs-routeparams)
* [angularjs-redirectto](https://egghead.io/lessons/angularjs-redirectto)

## Setup

### To install dependencies 

```
npm install
```

```
bower install
```

### To start application in live reload mode

    grunt serve
    
### Jshint
To run jshint:
    
    grunt jshint:default

### Run tests

To unit tests in development mode:
    
    grunt test:dev
    
To run e2e tests in development mode:

    grunt test:e2e

To run jshint, tests and coverage:

    npm test

Good luck!
