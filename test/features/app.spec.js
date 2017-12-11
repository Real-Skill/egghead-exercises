var Promise = require('bluebird');
var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('Directive Communication', function ()
{
    'use strict';

    describe('Nesting directives', function ()
    {
        var vehicleElements;

        beforeAll(function ()
        {
            browser.get('/');
        });

        beforeEach(function ()
        {
            vehicleElements = element.all(by.tagName('vehicle'));
        });

        it('I should see "vehicle"', function ()
        {
            expect(vehicleElements.count()).toEqual(2);
        });

        it('I should see "car"', function ()
        {
            return Promise.all([
                vehicleElements.get(0).element(by.tagName('car')).isPresent(),
                vehicleElements.get(1).element(by.tagName('car')).isPresent()
            ]).then(function (arr){
                expect(arr).toContain(true);
            });
        });

        it('I should see "audi"', function ()
        {
            return Promise.all([
                vehicleElements.get(0).element(by.tagName('car')).element(by.tagName('audi')).isPresent(),
                vehicleElements.get(1).element(by.tagName('car')).element(by.tagName('audi')).isPresent()
            ]).then(function (arr){
                expect(arr).toContain(true);
            });
        });

        it('I should see "bus"', function ()
        {
            return Promise.all([
                vehicleElements.get(0).element(by.tagName('bus')).isPresent(),
                vehicleElements.get(1).element(by.tagName('bus')).isPresent()
            ]).then(function (arr){
                expect(arr).toContain(true);
            });
        });

        it('I should see "jelcz"', function ()
        {
            return Promise.all([
                vehicleElements.get(0).element(by.tagName('bus')).element(by.tagName('jelcz')).isPresent(),
                vehicleElements.get(1).element(by.tagName('bus')).element(by.tagName('jelcz')).isPresent()
            ]).then(function (arr){
                expect(arr).toContain(true);
            });
        });
    });

    describe('Changing car speed', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should see "I am fast car! 30 km/h! Whoa!" text in "driveCarMessage"', function ()
        {
            app.clearTextInputCar();
            app.setTextInputCar(30);
            app.clickShowCar();
            return app.getTextAudi().then(function (text)
            {
               expect(text).toEqual('I am fast car! 30 km/h! Whoa!');
            });
        });

        it('I should see "I am fast car! 89 km/h! Whoa!" text in "driveCarMessage"', function ()
        {
            app.clearTextInputCar();
            app.setTextInputCar(89);
            app.clickShowCar();
            return app.getTextAudi().then(function (text)
            {
                expect(text).toEqual('I am fast car! 89 km/h! Whoa!');
            });
        });
    });

    describe('Changing bus speed', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should see "I am fast bus! 11 km/h! Whoa!" text in "driveBusMessage"', function ()
        {
            app.clearTextInputBus();
            app.setTextInputBus(11);
            app.clickShowBus();
            return app.getTextJelcz().then(function (text)
            {
                expect(text).toEqual('I am fast bus! 11 km/h! Whoa!');
            });
        });

        it('I should see "I am fast bus! 89 km/h! Whoa!" text in "driveBusMessage"', function ()
        {
            app.clearTextInputBus();
            app.setTextInputBus(89);
            app.clickShowBus();
            return app.getTextJelcz().then(function (text)
            {
                expect(text).toEqual('I am fast bus! 89 km/h! Whoa!');
            });

        });
    });
});
