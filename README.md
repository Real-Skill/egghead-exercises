# Exercise 8 : Angular first directive

## Summary
The world needs more heroes. You are given a hard task to create at least two heroes and one superhero. Implement three simple directives that will allow you to create as many heroes as you need.

## Goals

* `hero` directive restricted as element and with given template as follows: 

```
< img src="assets/images/hero.png" class="hero-position" width="300px">
```
* `mask` directive restricted as element and with given template as follows: 

```
< img src="assets/images/mask.png" class="mask-position" width="62px">
```
* `superhero` directive restricted as element with template that use previous directives  - you should put mask after the hero element (use directives inside
 template 

 ```
 < div class="relative-position">
  ```
* Directives used in correct places at `index.html` (check comments)

The **superhero** should look as follows:

![alt text](app/assets/example.png "Superhero")

## Before you start, please refer to:
* [angularjs-first-directive](https://egghead.io/lessons/angularjs-first-directive)
* [write-your-first-directive](https://egghead.io/lessons/write-your-first-directive)

## Setup
 
### To install dependencies 

```
yarn install
```

```
bower install
```

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
