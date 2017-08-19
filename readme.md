# wifi-name

> Get current wifi name


## Install

```
$ npm install wifi-name
```


## Usage

```js
const wifiName = require('wifi-name');

wifiName().then(name => {
	console.log(name);
	//=> 'wu-tang lan'
});
```


## API

### wifiName()

Returns a `Promise` for a `string` with the current wifi name.

### wifiName.sync()

Returns a `string` with the current wifi name.


## Related

* [wifi-name-cli](https://github.com/kevva/wifi-name-cli) - CLI for this module


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
