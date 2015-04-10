# wifi-name [![Build Status](http://img.shields.io/travis/kevva/wifi-name.svg?style=flat)](https://travis-ci.org/kevva/wifi-name)

> Get current wifi name


## Install

```
$ npm install --save wifi-name
```


## Usage

```js
var wifiname = require('wifi-name');

wifiname(function (err, name) {
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
