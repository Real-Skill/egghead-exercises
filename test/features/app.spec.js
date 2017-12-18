var Promise = require('bluebird');
var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('Components And Containers', function ()
{
    'use strict';

    describe('Book directive', function ()
    {
        var bookElements;

        beforeAll(function ()
        {
            browser.get('/');
        });

        beforeEach(function ()
        {
            bookElements = element.all(by.tagName('book'));
        });

        it('I should see "bookTitle"', function ()
        {
            return Promise.all([
                bookElements.get(0).element(by.tagName('book-title')).isPresent()
            ]).then(function (arr){
                expect(arr).toContain(true);
            });
        });

        it('I should see "bookDescription"', function ()
        {
            return Promise.all([
                bookElements.get(0).element(by.tagName('book-description')).isPresent()
            ]).then(function (arr){
                expect(arr).toContain(true);
            });
        });

        it('I should see "bookPages"', function ()
        {
            return Promise.all([
                bookElements.get(0).element(by.tagName('book-pages')).isPresent()
            ]).then(function (arr){
                expect(arr).toContain(true);
            });
        });

        it('I should see "The Da Vinci Code" text in "bookTitleContent"', function ()
        {
            return app.getTitleBook().then(function (text)
            {
                expect(text).toEqual('The Da Vinci Code');
            });
        });

        it('I should see "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the' +
            ' Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French..." ' +
            'text in "bookDescriptionContent"', function ()
        {
            return app.getTextBook().then(function (text)
            {
                expect(text).toEqual('While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly ' +
                        'curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French...');
            });
        });

        it('I should see "454 pages" text in "bookPagesContent"', function ()
        {
            return app.getNumberPages().then(function (text)
            {
                expect(text).toEqual('454 pages');
            });
        });

    });
});
