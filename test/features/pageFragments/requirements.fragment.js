(function ()
{
    'use strict';

    function DivElement(e)
    {
        if (e === null) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    DivElement.prototype.getText = function()
    {
        return this.element.getText();
    };

    DivElement.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    function TextInput(e)
    {
        if (e === null) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    TextInput.prototype.setValue = function (text)
    {
        this.element.clear();
        return this.element.sendKeys(text);
    };

    function Button(e)
    {
        if (e === null) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    var helper = {
        div: function (e)
        {
            return new DivElement(e);
        },
        input: function (e)
        {
            return new TextInput(e);
        },
        button: function(e)
        {
            return new Button(e);
        },
        repeater: element.all(by.exactRepeater('req in ctrl.reqCollection'))
    };

    var elements = {
        title1: helper.repeater.get(0).element(by.className('alert-info')),
        title2: helper.repeater.get(1).element(by.className('alert-info')),
        title3: helper.repeater.get(2).element(by.className('alert-info')),
        title4: helper.repeater.get(3).element(by.className('alert-info')),
        image1: helper.repeater.get(0).element(by.className('btn')),
        image2: helper.repeater.get(1).element(by.className('btn')),
        image3: helper.repeater.get(2).element(by.className('btn')),
        image4: helper.repeater.get(3).element(by.className('btn')),
        input: element(by.tagName('input')),
        saveButton: element(by.id('save'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getText = function (element)
    {
        return helper.div(element).getText();
    };

    PageFragment.prototype.click = function (element)
    {
        return helper.div(element).clickOn();
    };

    PageFragment.prototype.setValue = function (element, value)
    {
        return helper.input(element).setValue(value);
    };

    PageFragment.prototype.clickButton = function (element)
    {
        return helper.button(element).clickOn();
    };

    module.exports = {
        PageFragment: PageFragment,
        elements: elements
    };
})();
