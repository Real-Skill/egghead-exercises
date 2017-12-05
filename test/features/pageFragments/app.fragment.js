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

    function TextField(e)
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

    TextField.prototype.getText = function ()
    {
        return this.element.getText();
    };

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };


    var helper = {
        button: function (e)
        {
            return new Button(e);
        },
        text: function (e)
        {
            return new TextField(e);
        },
        input: function (e)
        {
            return new TextInput(e);
        }
    };

    var elements = {
        button: {
            displayNextPage: element.bind(null, by.id('display')),
            successButton: element.bind(null, by.id('successButton')),
            unSuccessButton: element.bind(null, by.id('unSuccessButton'))
        },
        textHeader :{
            successText : element.bind(null, by.id('textSuccess')),
            unSuccessText : element.bind(null, by.id('textUnSuccess'))
        },
        input : {
            successInput: element.bind(null, by.id('success')),
            unSuccessInput: element.bind(null, by.id('unSuccess'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clickDisplay = function ()
    {
        return helper.button(elements.button.displayNextPage()).clickOn();
    };

    PageFragment.prototype.clickSuccess = function ()
    {
        return helper.button(elements.button.successButton()).clickOn();
    };

    PageFragment.prototype.clickUnSuccess = function ()
    {
        return helper.button(elements.button.unSuccessButton()).clickOn();
    };

    PageFragment.prototype.getTextSuccess = function ()
    {
        return helper.text(elements.textHeader.successText()).getText();
    };

    PageFragment.prototype.getTextUnSuccess = function ()
    {
        return helper.text(elements.textHeader.unSuccessText()).getText();
    };

    PageFragment.prototype.setTextInputSuccess = function (text)
    {
        return helper.input(elements.input.successInput()).setValue(text);
    };

    PageFragment.prototype.setTextInputUnSuccess = function (text)
    {
        return helper.input(elements.input.unSuccessInput()).setValue(text);
    };

    module.exports = PageFragment;
})();
