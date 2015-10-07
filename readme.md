# wifi-name

> Get current wifi name


## Install

```
$ npm install --save wifi-name
```


## Usage

```js
const wifiName = require('wifi-name');

wifiName().then(name => {
	console.log(name);
	//=> 'wu-tang lan'
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
