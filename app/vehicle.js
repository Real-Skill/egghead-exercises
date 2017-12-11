
var app = angular.module('app', []);

app.directive('vehicle', function ()
{
    'use strict';
    return {
        restrict: 'E', transclude: true, controller: function ()
        {
            this.drive = function (speed, vehicle)
            {
                return 'I am fast ' + vehicle + '! ' + speed + ' km/h! Whoa!';
            };

            this.alarm = function ()
            {
                window.alert('Beeeeeeep!');
            };
            this.fastenYourSeatbelt = function ()
            {
                window.alert('Click!');
            };

        }, template: '<div ng-transclude></div>'
    };
});

app.directive('car', function ()
{
    'use strict';
    return {
        restrict: 'E',
        require: '^vehicle',
        transclude: true,
        controller: function ()
        {
            this.seatbelts = true;
        },
        link: function (scope, element, attrs, clientCtrl)
        {
        },
        template: '<div class="col-md-6">' +
        '<img class="text-center" src="assets/car.png">' +
        '<div class="page-header"><strong>You are in the car</strong></div>' +
        '<div ng-transclude></div></div>'
    };
});

app.directive('bus', function ()
{
    'use strict';
    return {
        restrict: 'E',
        require: '^vehicle',
        transclude: true,
        controller: function ()
        {
            this.emergencyBrake = true;

        },
        link: function (scope, element, attrs, clientCtrl)
        {

        },
        template: '<div class="col-md-6">' +
        '<img class="text-center" src="assets/bus.png">' +
        '<div class="page-header"><strong>You are in the bus</strong></div >' +
        '<div ng-transclude></div></div>'

    };
});

app.directive('audi', function ()
{
    'use strict';
    return {
        restrict: 'E',
        link: function (scope, element, attrs, ctrls)
        {
            scope.speed = 80;
            scope.setSpeed = function (speed)
            {
            // scope.driveSpeed
            };
            scope.isClicked = function ()
            {


            };
        },
        template: '<div class="col-md-4"><input id="driveCar" class="form-control" type="number" ng-model="speed"></div>' +
        '<div class="btn-group"><button id="driveCarButton" class="btn btn-default" ng-click="setSpeed(speed)">Drive!</button>' +
        '<button id="seatBeltsButton" ng-click="isClicked()" class="btn btn-default">Seat belts!</button>' +
        '</div><h3 id="audiDriveSpeed">{{driveSpeed}}</h3>'
    };
});

app.directive('jelcz', function ()
{
    'use strict';
    return {
        restrict: 'E',
        controller: function ()
        {
        },
        link: function (scope, element, attrs, ctrls)
        {
            scope.speed = 12;
            scope.setSpeed = function (speed)
            {
                // scope.driveSpeed

            };

            scope.isClicked = function ()
            {
            };
        },
        template: '<div class="col-md-4"><input id="driveBus" class="form-control" type="number" ng-model="speed"></div>' +
        '<div class="btn-group"><button id="driveBusButton" class="btn btn-default" ng-click="setSpeed(speed)">Drive!</button>' +
        '<button  id="emergencyBrakeButton" class="btn btn-default" ng-click="isClicked()">Emergency brake!</button></div>' +
        '<h3 id="jelczDriveSpeed">{{driveSpeed}}</h3>'

    };

});
