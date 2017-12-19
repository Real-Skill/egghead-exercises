var Promise = require('bluebird');
var App = require('./pageFragments/fifa.fragment.js');
var app = new App.PageFragment();
var elements = App.elements;

describe('Fifa app', function()
{
    'use strict';

    describe('when browse to the "/"', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('should see "1" in "rank" column in row "1" of "fifa" table', function ()
        {
            expect(app.getText(elements.row1rank)).toBe('1');
        });

        it('should see "2" in "rank" column in row "2" of "fifa" table', function ()
        {
            expect(app.getText(elements.row2rank)).toBe('2');
        });

        it('should see "3" in "rank" column in row "3" of "fifa" table', function ()
        {
            expect(app.getText(elements.row3rank)).toBe('3');
        });

        it('the "fifa" table should have "5" rows', function ()
        {
            return new Promise(function (resolve)
            {
                resolve(elements.ranking.count());
            }).then(function (result)
            {
                expect(result).toBe(5);
            });
        });

        it('should not see "6" row of "fifa" table', function ()
        {
            expect(elements.row6.isPresent()).toBe(false);
        });

        it('should not see "type"', function ()
        {
            expect(elements.eventType.isPresent()).toBe(false);
        });

        describe('when click "button"', function ()
        {
            beforeAll(function ()
            {
                app.click(elements.button);
            });

            it('should see "click" in "type"', function ()
            {
                expect(app.getText(elements.eventType)).toBe('click');
            });

            it('the "fifa" table should have "6" rows', function ()
            {
                return new Promise(function (resolve)
                {
                    resolve(elements.ranking.count());
                }).then(function (result)
                {
                    expect(result).toBe(6);
                });
            });

            it('should see "7" in "rank" column in row "6" of "fifa" table', function ()
            {
                expect(app.getText(elements.row6.all(by.tagName('td')).get(0))).toBe('7');
            });

            it('should see "Poland" in "team" column in row "6" of "fifa" table', function ()
            {
                expect(app.getText(elements.row6.all(by.tagName('td')).get(1))).toBe('Poland');
            });

            it('should see "1209" in "totalPoints" column in row "6" of "fifa" table', function ()
            {
                expect(app.getText(elements.row6.all(by.tagName('td')).get(2))).toBe('1209');
            });
        });
    });
});
