var fifaApp = angular.module('fifaApp', []);

fifaApp.controller('FifaCtrl', function ()
{
    'use strict';

    var ctrl = this;

    ctrl.ranking = [{
        team: 'Germany', points: 1602
    }, {
        team: 'Brazil', points: 1483
    }, {
        team: 'Portugal', points: 1358
    }, {
        team: 'Argentina', points: 1348
    }, {
        team: 'Belgium', points: 1325
    }];

    ctrl.polandRank = false;

    ctrl.showPolandRank = function ()
    {
        ctrl.polandRank = !ctrl.polandRank;
    };
});
