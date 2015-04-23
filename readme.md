# wifi-name [![Build Status](https://travis-ci.org/kevva/wifi-name.svg?branch=master)](https://travis-ci.org/kevva/wifi-name)

> Get current wifi name


## Install

```
$ npm install --save wifi-name
```


## Usage

```js
var wifiName = require('wifi-name');

wifiName(function (err, name) {
	console.log(name);
	//=> wu-tang lan
});
```


## CLI

```
$ npm install --global wifi-name
```

```
$ wifi-name --help

  Usage
    $ wifi-name
    wu-tang lan
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
