/*global element,by*/
var byString = function (object, fragmentName)
{
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text)
{
    'use strict';

    var mapping = {
        brand: element.bind(null, by.id('brand')),
        brandText: element.bind(null, by.binding('brand')),
        capacity: element.bind(null, by.id('capacity')),
        capacityText: element.bind(null, by.binding('capacity')),
        nextButton: element.bind(null, by.id('nextButton')),
        backButton: element.bind(null, by.id('backButton')),
        secret: element.bind(null, by.tagName('img'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
