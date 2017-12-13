var fragments = require('./pageFragments/requirements.fragment.js');
var app = new fragments.PageFragment();
var elements = fragments.elements;

describe('Requirements app', function ()
{
    'use strict';

    describe('when browse to the "/"', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('should not see "input"', function ()
        {
            expect(elements.input.isPresent()).toBeFalsy();
        });

        describe('when click on 2nd image', function ()
        {
            beforeAll(function ()
            {
                elements.image2.click();
            });

            it('should see "input"', function ()
            {
                expect(elements.input.isPresent()).toBeTruthy();
            });

            describe('when enter "Consultant" into "input" field', function ()
            {
                beforeAll(function ()
                {
                    app.setValue(elements.input, 'Consultant');
                });

                it('should see "Documentation" in 2nd image\'s title', function ()
                {
                    expect(app.getText(elements.title2)).toBe('Documentation');
                });

                describe('when click "Save" button', function ()
                {
                    it('should see "Consultant" in 2nd image\'s title', function ()
                    {
                        app.clickButton(elements.saveButton);
                        expect(app.getText(elements.title2)).toBe('Consultant');
                    });
                });
            });
        });

        describe('when click on 3rd image', function ()
        {
            beforeAll(function ()
            {
                elements.image3.click();
            });

            it('should see "input"', function ()
            {
                expect(elements.input.isPresent()).toBeTruthy();
            });

            describe('when enter "Customer" into "input" field', function ()
            {
                beforeAll(function ()
                {
                    app.setValue(elements.input, 'Customer');
                });

                it('should see "Consultant" in 3rd image\'s title', function ()
                {
                    expect(app.getText(elements.title3)).toBe('Consultant');
                });

                describe('when click "Save" button', function ()
                {
                    it('should see "Customer" in 3rd image\'s title', function ()
                    {
                        app.clickButton(elements.saveButton);
                        expect(app.getText(elements.title3)).toBe('Customer');
                    });
                });
            });
        });
    });
});
