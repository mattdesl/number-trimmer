var test = require('tape').test;

var trimmer = require('./');

test('trims all numbers in object', function(t) {
    var obj1 = {
        a: 'foo',
        bool: true,
        b: {
            foo: 'jabba',
            bar: true,
            zook: 52,
            trimA: 134.512312561234
        },
        c: 51.51235612,
        d: 51.5,
        e: 51
    };

    var num1 = 23.412512;

    t.equal(trimmer(num1, 2), 23.41);
    t.equal(trimmer(num1, 3), 23.413);
    t.equal(trimmer(num1, 4), 23.4125);

    var trimmed1 = trimmer(obj1, 2);

    t.equal(typeof trimmed1.a, 'string', 'does not affect strings')
    t.equal(typeof trimmed1.bool, 'boolean', 'does not affect booleans')
    t.equal(trimmed1.c, 51.51, 'trims number types')
    t.equal(trimmed1.b.trimA, 134.51, 'trims nested number types')
    t.equal(trimmed1.b.zook, 52, 'has no effect on integers')

    t.end();
});