(function ()
{
    'use strict';

    function Link(e)
    {
        if (e === null) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    Link.prototype.clickOn = function()
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
        link: function (e)
        {
            return new Link(e);
        },
        text: function (e)
        {
            return new TextField(e);
        }
    };

    var elements = {
        link: {
            start: element(by.linkText('Start')),
            verticalList: element(by.linkText('Vertical Paintings')),
            horizontalList: element(by.linkText('Horizontal Paintings'))
        },
        start: {
            text: {
                header: element(by.className('jumbotron')).element(by.tagName('h1')),
                paragraph: element(by.className('jumbotron')).element(by.tagName('p'))
            }
        },
        verticalList: {
            link: {
                paintings: {
                    painting1: element.all(by.exactRepeater('vPainting in paintingList')).get(0),
                    painting2: element.all(by.exactRepeater('vPainting in paintingList')).get(1),
                    painting3: element.all(by.exactRepeater('vPainting in paintingList')).get(2)
                }
            },
            text: {
                title: element(by.binding('detail.title')),
                author: element(by.binding('detail.author')),
                location: element(by.binding('detail.location')),
                date: element(by.binding('detail.date'))
            }
        },
        horizontalList: {
            link: {
                paintings: {
                    painting1: element.all(by.exactRepeater('hPainting in paintingList')).get(0),
                    painting2: element.all(by.exactRepeater('hPainting in paintingList')).get(1)
                }
            },
            text: {
                title: element(by.binding('detail.title')),
                author: element(by.binding('detail.author')),
                location: element(by.binding('detail.location')),
                date: element(by.binding('detail.date'))
            }
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clickLink = function (element)
    {
        return helper.link(element).clickOn();
    };

    PageFragment.prototype.getText = function (element)
    {
        return helper.text(element).getText();
    };

    PageFragment.prototype.getPath = function()
    {
        var reg = new RegExp('/#(.*)');
        return browser.getCurrentUrl().then(function (url)
        {
            return reg.exec(url)[1];
        });
    };

    module.exports = {
        PageFragment: PageFragment,
        elements: elements
    };
})();
