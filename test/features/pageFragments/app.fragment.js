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

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

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
        button: {
            Sing: element.bind(null, by.id('showSong')),
            Fake: element.bind(null, by.id('showFake'))
        },
        textFragment:{
            songFragment : element.bind(null, by.id('songFragment')),
            fakeFragment : element.bind(null, by.id('fakeFragment')),
            author : element.bind(null, by.id('author')),
            title : element.bind(null, by.id('title'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clickShowSong = function ()
    {
        return helper.button(elements.button.Sing()).clickOn();
    };

    PageFragment.prototype.clickShowFake = function ()
    {
        return helper.button(elements.button.Fake()).clickOn();
    };

    PageFragment.prototype.getSongText = function ()
    {
        return helper.text(elements.textFragment.songFragment()).getText();
    };

    PageFragment.prototype.getFakeText = function ()
    {
        return helper.text(elements.textFragment.fakeFragment()).getText();
    };

    PageFragment.prototype.getTitleText = function ()
    {
        return helper.text(elements.textFragment.title()).getText();
    };

    PageFragment.prototype.getAuthorText = function ()
    {
        return helper.text(elements.textFragment.author()).getText();
    };

    module.exports = PageFragment;
})();
