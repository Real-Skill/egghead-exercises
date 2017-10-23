# Exercise 11 : Understanding isolated scope

## Summary
You are an owner of a small sea cargo company. Everyday, you check the weather reports to make sure that the conditions allow your fleet to depart from the port. It is very tiring and you decide to create a simple application that will allow you to automatically check the weather conditions and report to the boat.

The local weather monitoring station provides a very simple API with an example how to use it so you don't have to worry about the data.

Furthermore, you plan to share your application with others, so you need to create it as a directive accepting a custom reporting function and a conditions message. The captain of each vessel should also be able to set their boat type, because some vessels are not able to withstand heavy rain or wind.

## Goals

* `shipSender` directive in **port.js**:
	* should expect to receive two attributes passed to its isolated scope: a `customCheck` function and `conditions` string
	* in **Check** button ng-click directive should be added and invoked `customCheck`(with **boat** model and **currentConditions** passed as 	parameters)
	* template should assigned a returning value from **customCheck** to **answer** variable ( ***Hint***: you can assign the variable in ng-click directive)
* **weatherConditions** (use correct method as indicated in the comment) and **checkMyBoat** functions should be passed to **shipSender** directive
* three **shipSender** directives should be added in the correct place and with proper parameters to **index.html** (check comments)

### Before you start, please refer to
* [angularjs-understanding-isolate-scope](https://egghead.io/lessons/angularjs-understanding-isolate-scope)
* [angularjs-isolate-scope-attribute-binding](https://egghead.io/lessons/angularjs-isolate-scope-attribute-binding)

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

To run e2e tests in development mode:

    grunt test:e2e

To run jshint, tests and coverage:

    npm test


Good luck!

