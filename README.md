[![browser support](https://ci.testling.com/mattdesl/number-trimmer.png)](https://ci.testling.com/mattdesl/number-trimmer)

# number-trimmer

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Simple way of trimming all numbers types in an object to the given number of decimal places. Defaults to 4 decimal places.

```js
//your data with lots of decimal places
var bigDataSet = {
	foo: 'foo',  // non-number types are ignored
	bar: 23.142145124,
	foobar: 12.14123123,
	//... etc
};

//trimmed to N places
var trimmed = require('number-trimmer')(bigDataSet, 2);
```

## Usage

[![NPM](https://nodei.co/npm/number-trimmer.png)](https://nodei.co/npm/number-trimmer/)

```trim( data, numPlaces )```

If data is a number, it will be trimmed as per usual. Otherwise, we will assume it's an object or array, and traverse it entirely to trim all number types in it. If numPlaces is not specified, it defaults to 4. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/number-trimmer/blob/master/LICENSE.md) for details.
