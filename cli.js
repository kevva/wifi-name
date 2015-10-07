#!/usr/bin/env node
'use strict';
var meow = require('meow');
var wifiName = require('./');

meow({
	help: [
		'Usage',
		'  $ wifi-name',
		'  wu-tang lan'
	]
});

wifiName().then(function (name) {
	console.log(name);
});
