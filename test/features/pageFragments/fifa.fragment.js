(function ()
{
    'use strict';

    function Button(e)
    {
        if (e === null) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    Button.prototype.click = function ()
    {
        return this.element.click();
    };

    function TextField(e)
    {
        if (e === null) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    TextField.prototype.getText = function ()
    {
        return this.element.getText();
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
        button: element(by.tagName('button')),
        ranking: element(by.tagName('tbody')).all(by.tagName('tr')),
        row1rank: element(by.repeater('rank in fifa.ranking').row(0).column('$index + 1')),
        row2rank: element(by.repeater('rank in fifa.ranking').row(1).column('$index + 1')),
        row3rank: element(by.repeater('rank in fifa.ranking').row(2).column('$index + 1')),
        row6: element(by.tagName('tbody')).all(by.tagName('tr')).get(5),
        eventType: element(by.tagName('code'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.click = function (element)
    {
        return helper.button(element).click();
    };

    PageFragment.prototype.getText = function (element)
    {
        return helper.text(element).getText();
    };

    module.exports = {
        PageFragment: PageFragment,
        elements: elements
    };
})();
