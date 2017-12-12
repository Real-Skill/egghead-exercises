var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('Experimental "Controller as" Syntax', function ()
{
    'use strict';

    describe('', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should not see "button.success"', function ()
        {
            expect(element.all(by.id('successButton')).count()).toEqual(0);
        });

        it('I should not see "button.unSuccess"', function ()
        {
            expect(element.all(by.id('unSuccessButton')).count()).toEqual(0);
        });
    });

    describe('Enter only unsuccess message', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
            app.setTextInputUnSuccess('Bug!');
            app.clickDisplay();
        });

        it('I should not see "button.success"', function ()
        {
            expect(element.all(by.id('successButton')).count()).toEqual(0);
        });

        it('I should not see "button.unSuccess"', function ()
        {
            expect(element.all(by.id('unSuccessButton')).count()).toEqual(0);
        });
    });

    describe('Enter "Correct!" success and "Bug!" unsuccess messages', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
            app.setTextInputSuccess('Correct!');
            app.setTextInputUnSuccess('Bug!');
            app.clickDisplay();
        });

        it('I should see "button.success"', function ()
        {
            expect(element.all(by.id('successButton')).count()).toEqual(1);
        });

        it('I should see "button.unSuccess"', function ()
        {
            expect(element.all(by.id('unSuccessButton')).count()).toEqual(1);
        });

        it('I should see "Correct!" in "message.success"', function ()
        {
            app.clickSuccess();
            return app.getTextSuccess().then(function (text)
            {
                expect(text).toEqual('Correct!');
            });
        });

        it('I should see "Bug!" in "message.unSuccess"', function ()
        {
            app.clickUnSuccess();
            return app.getTextUnSuccess().then(function (text)
            {
                expect(text).toEqual('Bug!');
            });
        });

    });

    describe('Enter "Ok!" success and "Not ok!" unsuccess messages', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
            app.setTextInputSuccess('Ok!');
            app.setTextInputUnSuccess('Not ok!');
            app.clickDisplay();
        });

        it('I should see "button.success"', function ()
        {
            expect(element.all(by.id('successButton')).count()).toEqual(1);
        });

        it('I should see "button.unSuccess"', function ()
        {
            expect(element.all(by.id('unSuccessButton')).count()).toEqual(1);
        });

        it('I should see "Ok!" in "message.success"', function ()
        {
            app.clickSuccess();
            return app.getTextSuccess().then(function (text)
            {
                expect(text).toEqual('Ok!');
            });
        });

        it('I should see "Not ok!" in "message.unSuccess"', function ()
        {
            app.clickUnSuccess();
            return app.getTextUnSuccess().then(function (text)
            {
                expect(text).toEqual('Not ok!');
            });
        });
    });
});
