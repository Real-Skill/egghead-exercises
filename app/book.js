var bookApp = angular.module('bookApp', []);

bookApp.controller('BookCtrl', function ($scope)
{
    'use strict';
    $scope.description = 'While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call' +
            ' in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum,' +
            ' his body covered in baffling symbols. As Langdon and gifted French...';

});

bookApp.directive('bookTitle', function ()
{
    'use strict';
    return {
        restrict: 'E', scope: {
            title: '@'
        }, template: '<h4 id="titleBook" class="text-center"><strong>{{title}}</strong></h4>'
    };
});

bookApp.directive('bookDescription', function ()
{
    'use strict';
    return {
        restrict: 'E', scope: {
            text: '='
        }, template: '<div id="textBook" class="jumbotron text-left">{{text}}</div>'
    };
});

bookApp.directive('bookPages', function ()
{
    'use strict';
    return {
        restrict: 'E', scope: {
            number: '@'
        }, template: '<span id="numberPages" class="badge">{{number}} pages</span>'
    };
});

bookApp.directive('book', function ()
{
    'use strict';
    return {
        restrict: 'E',
        scope: {
            publisher: '@'
        },
        template: '<div class="col-md-4 text-right">' +
        '<div class="panel panel-default" >' +
        '<div class="panel-body">' +
        '<div>' +
        // insert content of the book here

        '</div>' +
        '</div>' +
        '<div class="panel-footer text-left"><strong>Publisher: {{publisher}}</strong></div></div></div>'
    };
});


