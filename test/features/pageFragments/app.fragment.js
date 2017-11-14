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

    function TextField(e)
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

    TextInput.prototype.getValue = function ()
    {
        return this.element.getText();
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
            driveCarButton: element.bind(null, by.id('driveCarButton')),
            driveBusButton: element.bind(null, by.id('driveBusButton'))
        },
        textHeader :{
            textAudi : element.bind(null, by.id('audiDriveSpeed')),
            textJelcz : element.bind(null, by.id('jelczDriveSpeed'))
        },
        input : {
            carInput: element.bind(null, by.id('driveCar')),
            busInput: element.bind(null, by.id('driveBus'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clickShowCar = function ()
    {
        return helper.button(elements.button.driveCarButton()).clickOn();
    };

    PageFragment.prototype.clickShowBus = function ()
    {
        return helper.button(elements.button.driveBusButton()).clickOn();
    };

    PageFragment.prototype.getTextAudi = function ()
    {
        return helper.text(elements.textHeader.textAudi()).getText();
    };

    PageFragment.prototype.getTextJelcz = function ()
    {
        return helper.text(elements.textHeader.textJelcz()).getText();
    };

    PageFragment.prototype.setTextInputCar = function (text)
    {
        return helper.input(elements.input.carInput()).setValue(text);
    };

    PageFragment.prototype.setTextInputBus = function (text)
    {
        return helper.input(elements.input.busInput()).setValue(text);
    };

    PageFragment.prototype.clearTextInputCar = function ()
    {
        return helper.input(elements.input.carInput()).clearValue();
    };

    PageFragment.prototype.clearTextInputBus = function ()
    {
        return helper.input(elements.input.busInput()).clearValue();
    };

    module.exports = PageFragment;
})();
