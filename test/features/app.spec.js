var App = require('./pageFragments/app.fragment.js');
var app = new App.PageFragment();


describe('Promises', function ()
{
    'use strict';

    describe('Resolve default order', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
            app.clickAdd();
            app.clickResolve();

        });

        it('I should see "Pasta" in "order.name" column in row "1" of "orders" table', function ()
        {
            element.all(by.css('tbody tr td')).then(function(items) {
                expect(items[0].getText()).toBe('Pasta');
            });
        });

        it('I should see "4" in "order.quantity" column in row "1" of "orders" table', function ()
        {
            element.all(by.css('tbody tr td')).then(function(items) {
                expect(items[1].getText()).toBe('4');
            });
        });

    });

    describe('Resolve more orders', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
            app.clearTextName();
            app.clearTextQuantity();
            app.setTextName('Spaghetti');
            app.setTextQuantity('4');
            app.clickAdd();
            app.setTextName('Orange juice');
            app.setTextQuantity('1');
            app.clickAdd();
            app.clickResolve();
            app.clickResolve();
        });

        it('I should see "Spaghetti" in "order.name" column in row "1" of "orders" table', function ()
        {
            element.all(by.css('tbody tr td')).then(function(items) {
                expect(items[0].getText()).toBe('Spaghetti');
            });
        });

        it('I should see "4" in "order.quantity" column in row "1" of "orders" table', function ()
        {
            element.all(by.css('tbody tr td')).then(function(items) {
                expect(items[1].getText()).toBe('4');
            });
        });

        it('I should see "Orange juice" in "order.name" column in row "2" of "orders" table', function ()
        {
            element.all(by.css('tbody tr td')).then(function(items) {
                expect(items[2].getText()).toBe('Orange juice');
            });
        });

        it('I should see "1" in "order.quantity" column in row "2" of "orders" table', function ()
        {
            element.all(by.css('tbody tr td')).then(function(items) {
                expect(items[3].getText()).toBe('1');
            });
        });

    });
});
