(function ()
{
    'use strict';

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    TextField.prototype.getText = function ()
    {
        return this.element.getText();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        }
    };

    var elements = {
        text :{
            titleBook : element.bind(null, by.id('titleBook')),
            textBook : element.bind(null, by.id('textBook')),
            numberPages : element.bind(null, by.id('numberPages'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getTitleBook = function ()
    {
        return helper.text(elements.text.titleBook()).getText();
    };

    PageFragment.prototype.getTextBook = function ()
    {
        return helper.text(elements.text.textBook()).getText();
    };

    PageFragment.prototype.getNumberPages= function ()
    {
        return helper.text(elements.text.numberPages()).getText();
    };

    module.exports = PageFragment;
})();
