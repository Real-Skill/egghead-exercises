# Exercise 8 : Angular first directive

## Summary
The world needs more heroes. You are given a hard task to create at least two heroes and one superhero. Implement three simple directives that will allow you to create as many heroes as you need.

## Goals

* `hero` directive restricted as an element and with a given template as follows: 

```
< img src="assets/images/hero.png" class="hero-position" width="300px">
```
* `mask` directive restricted as an element and with a given template as follows: 

```
< img src="assets/images/mask.png" class="mask-position" width="62px">
```
* `superhero` directive restricted as an element with a template that uses previous directives - you should put a mask after the hero element (use directives within the
 template)

 ```
 < div class="relative-position">
  ```
* Directives used in the correct places at `index.html` (check comments)

The **superhero** should look as follows:

![alt text](app/assets/example.png "Superhero")

## Before you start, please refer to
* [angularjs-first-directive](https://egghead.io/lessons/angularjs-first-directive)
* [write-your-first-directive](https://egghead.io/lessons/write-your-first-directive)

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
