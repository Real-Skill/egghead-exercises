describe('ng-repeat-start', function ()
{
    'use strict';

    describe('initialization', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should see "ngRepeatStart"', function ()
        {
            var isExist = false;
            element.all(by.css('div')).each(function (element) {
                element.getAttribute('ng-repeat-start').then(function(attr) {
                    if(attr)
                    {
                        isExist = true;
                    }
                });
            }).then(function ()
            {
                expect(isExist).toBeTruthy();
            });
        });

        it('I should see "ngRepeat"', function ()
        {
            var isExist = false;
            element.all(by.css('div')).each(function (element) {
                element.getAttribute('ng-repeat').then(function(attr) {
                    if(attr)
                    {
                        isExist = true;
                    }
                });
            }).then(function ()
            {
                expect(isExist).toBeTruthy();
            });
        });

        it('I should see "ngRepeatEnd"', function ()
        {
            var isExist = false;
            element.all(by.css('div')).each(function (element) {
                element.getAttribute('ng-repeat-end').then(function(attr) {
                    if('' === attr)
                    {
                        isExist = true;
                    }
                });
            }).then(function ()
            {
                expect(isExist).toBeTruthy();
            });
        });
    });

    describe('ng-repeat-start', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should see "1. Austin" for "1" in "people"', function ()
        {
            element.all(by.css('.name')).then(function (items)
            {
                expect(items[0].getText()).toBe('1. Austin');
            });
        });

        it('I should see "2. Ben" for "2" in "people"', function ()
        {
            element.all(by.css('.name')).then(function (items)
            {
                expect(items[1].getText()).toBe('2. Ben');
            });
        });

        it('I should see "3. Willy" for "3" in "people"', function ()
        {
            element.all(by.css('.name')).then(function (items)
            {
                expect(items[2].getText()).toBe('3. Willy');
            });
        });

        it('I should see "4. Maxine" for "4" in "people"', function ()
        {
            element.all(by.css('.name')).then(function (items)
            {
                expect(items[3].getText()).toBe('4. Maxine');
            });
        });
    });

    describe('ng-repeat', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('I should see "banana x 4" for "1" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[0].getText()).toBe('banana x 4');
            });
        });

        it('I should see "ham x 1" for "2" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[1].getText()).toBe('ham x 1');
            });
        });

        it('I should see "tomato x 1" for "3" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[2].getText()).toBe('tomato x 1');
            });
        });

        it('I should see "banana x 4" for "4" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[3].getText()).toBe('banana x 4');
            });
        });

        it('I should see "wasabi x 2" for "5" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[4].getText()).toBe('wasabi x 2');
            });
        });

        it('I should see "ham x 1" for "6" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[5].getText()).toBe('ham x 1');
            });
        });

        it('I should see "cheese x 2" for "7" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[6].getText()).toBe('cheese x 2');
            });
        });

        it('I should see "milk x 10" for "8" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[7].getText()).toBe('milk x 10');
            });
        });

        it('I should see "tomato x 1" for "9" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[8].getText()).toBe('tomato x 1');
            });
        });

        it('I should see "milk x 3" for "10" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[9].getText()).toBe('milk x 3');
            });
        });

        it('I should see "butter x 2" for "11" in "food"', function ()
        {
            element.all(by.css('.product')).then(function (items)
            {
                expect(items[10].getText()).toBe('butter x 2');
            });
        });
    });
});
