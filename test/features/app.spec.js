var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('Initial state', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    it('I should see "+1 (820) 450-3124" in "phoneNumber"', function ()
    {
        element(by.cssContainingText('option','Good Burnett')).click();
        app.clickButton();
        return app.getReturnNumber().then(function (text)
        {
            expect(text).toEqual('+1 (820) 450-3124');
        });
    });

    it('I should see "+1 (932) 408-2012" in "phoneNumber"', function ()
    {
        element(by.cssContainingText('option','Candace Gordon')).click();
        app.clickButton();
        app.clickButton();
        return app.getReturnNumber().then(function (text)
        {
            expect(text).toEqual('+1 (932) 408-2012');
        });
    });
});
