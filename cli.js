#!/usr/bin/env node
'use strict';
var meow = require('meow');
var wifiName = require('./');

meow({
	help: [
		'Usage',
		'  $ wifi-name',
		'  wu-tang lan'
	].join('\n')
});

wifiName(function (err, name) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(name);
});
