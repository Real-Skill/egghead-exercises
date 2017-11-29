var App = require('./pageFragments/app.fragment.js');
var app = new App();

describe('Sing and fake', function ()
{
    'use strict';
    describe('Sing button', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should see "Author: Gotye feat. Kimbra" in "author"', function ()
        {
            return app.getAuthorText().then(function (text)
            {
                expect(text).toEqual('Author: Gotye feat. Kimbra');
            });
        });

        it('I should see "Title: Somebody That I Used To Know" in "title"', function ()
        {
            return app.getTitleText().then(function (text)
            {
                expect(text).toEqual('Title: Somebody That I Used To Know');
            });
        });

        it('I should see "But you did not have to cut me off... But you treat me like a stranger ..." in "songFragment"', function ()
        {
            app.clickShowSong();
            return app.getSongText().then(function (text)
            {
                expect(text).toEqual('But you did not have to cut me off... But you treat me like a stranger ...');
            });
        });
    });

    describe('Fake button', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should see "Author: Gotye feat. Kimbra" in "author"', function ()
        {
            return app.getAuthorText().then(function (text)
            {
                expect(text).toEqual('Author: Gotye feat. Kimbra');
            });
        });

        it('I should see "Title: Somebody That I Used To Know" in "title"', function ()
        {
            return app.getTitleText().then(function (text)
            {
                expect(text).toEqual('Title: Somebody That I Used To Know');
            });
        });

        it('I should see "Buuuuuuuuuuuuuut you niah niah blah bla ..." in "fakeFragment"', function ()
        {
            app.clickShowFake();
            return app.getFakeText().then(function (text)
            {
                expect(text).toEqual('Buuuuuuuuuuuuuut you niah niah blah bla ...');
            });
        });
    });
});
