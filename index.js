var traverse = require('traverse');

module.exports = function(obj, places) {
    places = typeof places === "number" ? places : 4;

    if (typeof obj === 'number')
        return +(obj.toFixed(places));

    return traverse(obj).map(function(x) {
        if ( typeof x === "number" ) {
            x = +(x.toFixed(places));
        }
        return x;
    });
};