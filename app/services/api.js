angular.module('services').factory('Api', ['$q', '$http', function ($q, $http)
{
    'use strict';
    return {
        getUsers: function ()
        {
            var deferred = $q.defer();
            $http({
                method: 'GET', url: 'https://api.github.com/users'
            }).success(function (data)
            {
                deferred.resolve(data);
            });
            return deferred.promise;

        }
    };
}]);
