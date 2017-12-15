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

    // function TextInput(e)
    // {
    //     if (null == e) {
    //         throw new Error('element must not be null');
    //     }
    //     this.element = e;
    // }

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    TextField.prototype.getText = function ()
    {

        return this.element.getText();
    };

    // TextInput.prototype.setValue = function (text)
    // {
    //     return this.element.sendKeys(text);
    // };

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
            buttonShowNumber: element.bind(null, by.id('buttonShow'))
        },
        textFragment:{
            phoneNumberText : element.bind(null, by.id('phoneNumber'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clickButton = function ()
    {
        return helper.button(elements.button.buttonShowNumber()).clickOn();
    };


    PageFragment.prototype.getReturnNumber = function ()
    {
        return helper.text(elements.textFragment.phoneNumberText()).getText();
    };

    module.exports = PageFragment;
})();
