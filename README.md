#Exercise 7 : Angular built in filters

##Summary
In this application, you are supposed to use existing AngularJS filters. You start with a provided list of users that is supposed to be sortable and you 
could limit the number of results. 

##Goals
Limit the number of displayed records with the radio button (default limit should be 15). Afterwards please update the ability to sort data by column names 
by creating `reverseSort` function that sort the data ascending and descending. The table should be sort default by **id** (column name keep in `$scope
.choice`).
 
After changing order in some column and picking another by click, column should be sorted alphabetically. Take a look at `orderBy` documentation to 
see examples. 
  
**Hint!**
The order of `orderBy` and `limitTo` is relevant.
  
Examples of results:

* set limit to `1`

| Id | User Name | Full Name    | Gender |
|----|-----------|--------------|--------|
| 8  | mbanks7   | Martha Banks | Female |

* type `female` into search input

| Id | User Name  | Full Name        | Gender |
|----|------------|------------------|--------|
| 5  | swatson4   | Shirley Watson   | Female |
| 8  | mbanks7    | Martha Banks     | Female |
| 11 | eturnera   | Elizabeth Turner | Female |
| 14 | aboydd     | Angela Boyd      | Female |
| 15 | farmstronge|Frances Armstrong | Female |

##Before you start, please refer to:
* [angularjs-built-in-filters](https://egghead.io/lessons/angularjs-built-in-filters)
* [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)

##Setup
 You should have `yarn`, `bower`, `grunt-cli`  packages installed to run this example.
 
###To install dependencies 

```
yarn install
```

```
bower install
```

###To start application in live reload mode

    grunt serve
    
###Jshint
To run verify jshint:
    
    grunt jshint:default

###Run tests

To unit tests in development mode:
    
    grunt test:dev
    
To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    yarn test

Good luck!
