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
        }
    };

    var elements = {
        button: {
            choose: element.bind(null, by.id('chooseButton')),
            checkNowButton: element.bind(null, by.id('checkNowButton')),
            waitButton: element.bind(null, by.id('waitButton'))
        },
        textFragment:{
            returnMessage : element.bind(null, by.id('textReturnMessage'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clickChoose = function ()
    {
        return helper.button(elements.button.choose()).clickOn();
    };

    PageFragment.prototype.clickCheckNowButton = function ()
    {
        return helper.button(elements.button.checkNowButton()).clickOn();
    };

    PageFragment.prototype.clickWaitButton = function ()
    {
        return helper.button(elements.button.waitButton()).clickOn();
    };

    PageFragment.prototype.getReturnMessage = function ()
    {
        return helper.text(elements.textFragment.returnMessage()).getText();
    };

    module.exports = PageFragment;
})();
