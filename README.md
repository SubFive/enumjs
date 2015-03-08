# enum.js
*Tiny vanilla JS library for creating enumerations.*


## Installation
Recommended way to install is via Bower:

```bower install --save jairovsky/enum.js```

If you aren't using Bower, just download it as zip.

## Basic usage

First, define your enum:
```javascript
Enum.define('Beverage', ['BEER', 'SODA', 'JUICE']);
```

Then you can access it through the global ```Beverage``` object:

```javascript
console.log(Beverage.JUICE);
```

## AMD/require
For AMD modules, the thing works a bit different.

```javascript
// file Beverage.js
define(['enum'], function (Enum) {
  return new Enum(['BEER', 'SODA', 'JUICE']);
});
```

```javascript
// another file
require(['Beverage'], function(Beverage) {
  console.log(Beverage.SODA);
});
```

## Node

```javascript
// file Beverage.js
var Enum = require('enum');

module.exports = new Enum(['BEER', 'SODA', 'JUICE']);
```

```javascript
// another file
var Beverage = require('Beverage');

console.log(Beverage.BEER);
```

## Cool tricks for cool kids

##### Every element has a ```.toString()``` method:
```javascript
console.log(Beverage.SODA.toString()); // "SODA"
```

##### You can pass a custom ```toString``` function right after the list of elements:

```javascript
Enum.define('Beverage', ['BEER', 'SODA', 'JUICE'], function (value) {
  
  switch(value) {
    case Beverage.BEER:
      return 'Tasty beer, 4,5% alcohol by volume';

    case Beverage.SODA:
      return 'Tasty soda, 0% alcohol by volume';

    case Beverage.JUICE:
      return 'Now this is healthy';
  }
});

console.log(Beverage.JUICE.toString()); // "Now this is healthy"
```
This is good for cases where you need to show a pretty value for the user based on your enum.

##### Get all the possible values for a given enum:

```javascript
Object.keys(Beverage); // ["BEER", "SODA", "JUICE"]
```

##### Elements are immutable:

In NodeJS and modern browsers (IE9+), the enum elements are immutable:
```javascript
Enum.define('Beverage', ['BEER', 'SODA', 'JUICE']);

Beverage.BEER = "I'm trying to override you";

console.log(Beverage.BEER.toString()); //"BEER", works normally
```

However, the global enum object (```Beverage``` in our case) is still mutable.

## Old browser gotchas
To ensure element immutability, enum.js relies on ```Object.freeze()```. This method is not available for IE8 and below, so be aware if you need to support old browsers.

## Testing

To test in NodeJS:<br>
``` jasmine ```

To test browser AMD/require behavior:<br>
```karma start karma-amd.conf.js```

To test common browser environment behavior:<br>
```karma start```

Full command:<br>
```jasmine && karma start --single-run && karma start karma-amd.conf.js --single-run```

## Contributing
In case you have an improvement idea or found an "easter egg", open an issue.