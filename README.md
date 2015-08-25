#Exercise 17: An alternative approach to controllers

##Summary
An alternative approach to controllers assumes that the function should be assigned to the controller, not to the $scope.
Create `SumCtrl` and `SubCtrl` providing the basic math sum (`addition`)and subtract (`subtraction`) functions according to the requirements.

##Goals
* `Calc.js` should contain `SumCtrl` and `SubCtrl` controllers
* `SumCtrl` should have the `addition` function assigned to itself
* `addition` should consume two arguments and assign the result to `sum` variable
* `SubCtrl` should be like `SumCtrl` but should have `subtraction` function and assign the result to `sub` variable instead
* each controller should have two variables (`firstNumber`, `secondNumber`) initialized with values **12** and **1**
* use `addition`  and `subtraction` function to display the result in correct header (check comments)

##Before you start, please refer to:
* [angularjs-an-alternative-approach-to-controllers](https://egghead.io/lessons/angularjs-an-alternative-approach-to-controllers)

##Setup
 You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. To resolve dependencies run:

```
npm install
```

```
bower install
```

To run the application:

```
grunt serve
```

To run unit tests:

```
grunt karma
```

Good luck!
