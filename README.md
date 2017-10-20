# Exercise 12 : Isolate Scope "@", "&"

## Summary 
The application which you are provided with is used for handling simple orders from the customers. It includes a simple list of products available for ordering
as well as basic functions. 

The main problem is that all products from different categories are now stacked in one select component, while the newest requirements
specify that you should have multiple components for different categories. As a smart person, you decide to create only one directive
and use it multiple times. 


## Goals
Pass custom order function (that accepts product as a parameter) and list of custom products (category).
Create ***orderComponent*** directive with an isolated scope and use it to enable the user to order from **sweets** and **cakes** categories.

* Edit **orderComponent** directive so that it would have **products** field and **buy** function passed as attributes in the correct 
format (directive should have isolated scope)
* Restrict order component to the element
* In **orderComponent** template:
    * ```<select>``` element (check comment) should be instantiated from **products** array (as options)
    * ```<select>``` element model should be available only on the directive scope and be set to first element of the **products** array as default
    * the bottom div element (check comment) should have **buy** function invocation bound on click (with ```<select>``` element model passed as argument)
* **index.html** must contain two separate order components for **cakes** and **sweets** products (they are already included in **appCtrl** scope, 
check comments to place them correctly)
* Both **orderComponent** instances in **index.html** should use **buyProduct** function (already included in **appCtrl** scope, which expects product as argument)

## Before you start, please refer to
* [angularjs-isolate-scope-expression-binding](https://egghead.io/lessons/angularjs-isolate-scope-expression-binding)
* [ngularjs-isolate-scope-two-way-binding](https://egghead.io/lessons/angularjs-isolate-scope-two-way-binding)
* [ngOptions example](https://docs.angularjs.org/api/ng/directive/ngOptions/#example)

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
