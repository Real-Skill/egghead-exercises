
var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('Injectors', function ()
{
    'use strict';

    describe('checkNow function', function ()
    {
        describe('user select available part', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
                element.all(by.id('option')).get(0).click();
                app.clickChoose();
                app.clickCheckNowButton();
            });

            it('I should see "This part is available and is very cheap" in "message"', function ()
            {
                return app.getReturnMessage().then(function (text)
                {
                    expect(text).toEqual('This part is available and is very cheap');
                });
            });
        });

        describe('user select not available part', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
                element.all(by.id('option')).get(1).click();
                app.clickChoose();
                app.clickCheckNowButton();
            });

            it('I should see "This part is NOT available and is very expensive..." in "message"', function ()
            {
                return app.getReturnMessage().then(function (text)
                {
                    expect(text).toEqual('This part is NOT available and is very expensive...');
                });
            });
        });


    });

    describe('wait function', function ()
    {
        describe('user select available part', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
                element.all(by.id('option')).get(0).click();
                app.clickChoose();
                app.clickWaitButton();
            });

            it('I should see "This part is available and is very cheap" in "message"', function ()
            {
                return app.getReturnMessage().then(function (text)
                {
                    expect(text).toEqual('This part is available and is very cheap');
                });
            });
        });
    });
});
