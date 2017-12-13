
angular.module('controllers').controller('UserCtrl', ['$scope', 'Api', function ($scope, api)
{
    'use strict';
    api.getUsers().then(function (data)
    {
        $scope.users = data;
    });
}]);
