# Exercise 10 : Directive restrictions

## Summary
Some developers were discussing how to extend an application functionality. They decided that not only will they need some new elements on the page, but also they will
need to change the behaviour of existing elements to meet current requirements. You are given a task to implement four directives that will serve as templates
for their use. Each of the directives should be restricted to a different property: element, attribute, class and, finally, comment. Moreover, you should
provide a working example.

## Goals

* `restrictE` directive restricted to the element and with the template set to the example data as follows: **'{{description.element.name}}: {{description
.element.call}}'** 
* `restrictA` directive restricted to the attribute and with the template pattern analogical to **restrictE** directive (but use description.attribute 
property)
* `restrictC` directive restricted to the class and with the template pattern analogical to **restrictE** directive (but use description.class property)
* `restrictM` directive restricted to the comment. Furthermore, in the directive body *`alert('Restrict M: working...');`* should be added.
* please bear in mind that required data is already defined in **AppCtrl** controller
* **index.html** should be updated with example directive usages (check comments)


**Hint**
 
 `camelCase` directives should be used inside .html files in such a way: `camel-case`  


## Before you start, please refer to
* [angularjs-directive-restrictions](https://egghead.io/lessons/angularjs-directive-restrictions)
* [restrictions](https://docs.angularjs.org/guide/directive)

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
