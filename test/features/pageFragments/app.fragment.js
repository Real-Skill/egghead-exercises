(function ()
{
    'use strict';

    function Button(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function TextInput(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    var helper = {
        button: function (e)
        {
            return new Button(e);
        },
        input: function (e)
        {
            return new TextInput(e);
        }
    };

    var elements = {
        button: {
            addToOrder: element.bind(null, by.id('addButton')),
            resolve: element.bind(null, by.id('resolveButton'))
        },
        text:{
            name : element.bind(null, by.id('name')),
            quantity : element.bind(null, by.id('quantity'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clickAdd = function ()
    {
        return helper.button(elements.button.addToOrder()).clickOn();
    };

    PageFragment.prototype.clickResolve = function ()
    {
        return helper.button(elements.button.resolve()).clickOn();
    };

    // PageFragment.prototype.getReturnMessage = function ()
    // {
    //     return helper.text(elements.textFragment.returnMessage()).getText();
    // };

    PageFragment.prototype.setTextName = function (text)
    {
        return helper.input(elements.text.name()).setValue(text);
    };

    PageFragment.prototype.setTextQuantity = function (text)
    {
        return helper.input(elements.text.quantity()).setValue(text);
    };

    PageFragment.prototype.clearTextName = function ()
    {
        return helper.input(elements.text.name()).clearValue();
    };

    PageFragment.prototype.clearTextQuantity = function ()
    {
        return helper.input(elements.text.quantity()).clearValue();
    };

    module.exports = {
        PageFragment: PageFragment
    };
})();
