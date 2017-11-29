
var songApp = angular.module('songApp', []);

songApp.factory('Song', function ()
{
    'use strict';

    return {
        author: 'Gotye feat. Kimbra',
        title: 'Somebody That I Used To Know',
        sing: 'But you did not have to cut me off... But you treat me like a stranger ...',
        fake: 'Buuuuuuuuuuuuuut you niah niah blah bla ...'
    };
});

songApp.controller('SongCtrl', function ()
{
    'use strict';
    var ctrl = this;
    ctrl.showSongText = function ()
    {
        ctrl.showSing = true;
        ctrl.showFake = false;
    };

    ctrl.showFakeText = function ()
    {
        ctrl.showSing = false;
        ctrl.showFake = true;
    };

});
