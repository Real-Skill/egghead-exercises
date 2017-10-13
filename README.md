#Exercise 19: Building Zippy

##Summary
Application displays a basic directive component that is used to donate money for whatever cause you want.
Complete `money` directive functionality using the acquired knowledge about ng-model, ng-click and transclusion (without controller).

##Goals
* button content text should be automatically updated when the text is entered into the `forWhat` field
* selecting the amount should automatically update ***I want to devote: $x*** paragraph (where **x** is selected amount)
* message `Shut up and take my money!` should show when you press the button and hide when you press it again (create and use `toggleContent` function)
* use `forWhat` and `howMany` as isolated scope variable names 

###Before you start, please refer to:
* [angularjs-isolate-scope-review](https://egghead.io/lessons/angularjs-isolate-scope-review)

##Setup
 
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
