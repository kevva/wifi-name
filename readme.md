# wifi-name [![Build Status](http://img.shields.io/travis/kevva/wifi-name.svg?style=flat)](https://travis-ci.org/kevva/wifi-name)

> Get current wifi name

## Install

```sh
$ npm install --save wifi-name
```

## Usage

```js
var wifiname = require('wifi-name');

wifiname(function (err, name) {
	if (err) {
		throw err;
	}

	console.log(name);
	//=> wu-tang lan
});
```

## CLI

```sh
$ npm install --global wifi-name
```

```sh
$ wifi-name --help

Usage
  $ wifi-name
  wu-tang lan
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
