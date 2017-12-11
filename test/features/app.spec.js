var Promise = require('bluebird');
var fragments = require('./pageFragments/app.fragment.js');
var app = new fragments.PageFragment();
var elements = fragments.elements;

describe('Application', function ()
{
    'use strict';

    describe('when browse to the "/"', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        describe('when click "navigation.start"', function ()
        {
            beforeAll(function ()
            {
                app.clickLink(elements.link.start);
            });

            it('should redirect to "/start"', function ()
            {
                expect(app.getPath()).toEqual('/start');
            });

            it('should set "welcomeJumbotron.h1" to "Welcome!"', function ()
            {
                expect(app.getText(elements.start.text.header)).toBe('Welcome!');
            });

            it('should set "welcomeJumbotron.p" to "to the exhibition of the most popular paintings"', function ()
            {
                expect(app.getText(elements.start.text.paragraph)).toBe('to the exhibition of the most popular paintings');
            });
        });

        describe('when click "navigation.verticalPaintings"', function ()
        {
            beforeAll(function ()
            {
                app.clickLink(elements.link.verticalList);
            });

            it('should redirect to "/vPaintings"', function ()
            {
                expect(app.getPath()).toEqual('/vPaintings');
            });

            describe('when click on 1st painting on the image.verticalList', function ()
            {
                it('should redirect to "/vPaintings/1"', function ()
                {
                    return Promise.all([
                        app.clickLink(elements.verticalList.link.paintings.painting1)
                    ]).then(function () {
                        expect(app.getPath()).toEqual('/vPaintings/1');
                    });
                });

                it('should set "paintingDetails.title" to "Mona Lisa"', function ()
                {
                    expect(app.getText(elements.verticalList.text.title)).toBe('Mona Lisa');
                });

                it('should set "paintingDetails.author" to "Author: Leonardo da Vinci"', function ()
                {
                    expect(app.getText(elements.verticalList.text.author)).toBe('Author: Leonardo da Vinci');
                });

                it('should set "paintingDetails.location" to "Location: Louvre"', function ()
                {
                    expect(app.getText(elements.verticalList.text.location)).toBe('Location: Louvre');
                });

                it('should set "paintingDetails.date" to "Date: 1503–1517"', function ()
                {
                    expect(app.getText(elements.verticalList.text.date)).toBe('Date: 1503–1517');
                });
            });

            describe('when click on 2nd painting on the image.verticalList', function ()
            {
                it('should redirect to "/vPaintings/4"', function ()
                {
                    return Promise.all([
                        app.clickLink(elements.verticalList.link.paintings.painting2)
                    ]).then(function () {
                        expect(app.getPath()).toEqual('/vPaintings/4');
                    });
                });

                it('should set "paintingDetails.title" to "The Scream"', function ()
                {
                    expect(app.getText(elements.verticalList.text.title)).toBe('The Scream');
                });

                it('should set "paintingDetails.author" to "Author: Edvard Munch"', function ()
                {
                    expect(app.getText(elements.verticalList.text.author)).toBe('Author: Edvard Munch');
                });

                it('should set "paintingDetails.location" to "Location: National Gallery"', function ()
                {
                    expect(app.getText(elements.verticalList.text.location)).toBe('Location: National Gallery');
                });

                it('should set "paintingDetails.date" to "Date: 1893–1893"', function ()
                {
                    expect(app.getText(elements.verticalList.text.date)).toBe('Date: 1893–1893');
                });
            });

            describe('when click on 3rd painting on the image.verticalList', function ()
            {
                it('should redirect to "/vPaintings/5"', function ()
                {
                    return Promise.all([
                        app.clickLink(elements.verticalList.link.paintings.painting3)
                    ]).then(function () {
                        expect(app.getPath()).toEqual('/vPaintings/5');
                    });
                });

                it('should set "paintingDetails.title" to "Girl with a Pearl Earring"', function ()
                {
                    expect(app.getText(elements.verticalList.text.title)).toBe('Girl with a Pearl Earring');
                });

                it('should set "paintingDetails.author" to "Author: Jan Vermeer"', function ()
                {
                    expect(app.getText(elements.verticalList.text.author)).toBe('Author: Jan Vermeer');
                });

                it('should set "paintingDetails.location" to "Location: Mauritshuis"', function ()
                {
                    expect(app.getText(elements.verticalList.text.location)).toBe('Location: Mauritshuis');
                });

                it('should set "paintingDetails.date" to "Date: 1665"', function ()
                {
                    expect(app.getText(elements.verticalList.text.date)).toBe('Date: 1665');
                });
            });
        });

        describe('when click "navigation.horizontalPaintings"', function ()
        {
            beforeAll(function ()
            {
                app.clickLink(elements.link.horizontalList);
            });

            it('should redirect to "/hPaintings"', function ()
            {
                expect(app.getPath()).toEqual('/hPaintings');
            });

            describe('when click on 1st painting on the image.horizontalList', function ()
            {
                it('should redirect to "/hPaintings/2"', function ()
                {
                    return Promise.all([
                        app.clickLink(elements.horizontalList.link.paintings.painting1)
                    ]).then(function () {
                        expect(app.getPath()).toEqual('/hPaintings/2');
                    });
                });

                it('should set "paintingDetails.title" to "The Last Supper"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.title)).toBe('The Last Supper');
                });

                it('should set "paintingDetails.author" to "Author: Leonardo da Vinci"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.author)).toBe('Author: Leonardo da Vinci');
                });

                it('should set "paintingDetails.location" to "Location: Santa Maria delle Grazie"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.location)).toBe('Location: Santa Maria delle Grazie');
                });

                it('should set "paintingDetails.date" to "Date: 1495–1498"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.date)).toBe('Date: 1495–1498');
                });
            });

            describe('when click on 2nd painting on the image.horizontalList', function ()
            {
                it('should redirect to "/hPaintings/3"', function ()
                {
                    return Promise.all([
                        app.clickLink(elements.horizontalList.link.paintings.painting2)
                    ]).then(function () {
                        expect(app.getPath()).toEqual('/hPaintings/3');
                    });
                });

                it('should set "paintingDetails.title" to "The Creation of Adam"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.title)).toBe('The Creation of Adam');
                });

                it('should set "paintingDetails.author" to "Author: Michelangelo"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.author)).toBe('Author: Michelangelo');
                });

                it('should set "paintingDetails.location" to "Location: Sistine Chapel"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.location)).toBe('Location: Sistine Chapel');
                });

                it('should set "paintingDetails.date" to "Date: 1512"', function ()
                {
                    expect(app.getText(elements.horizontalList.text.date)).toBe('Date: 1512');
                });
            });
        });
    });
});
