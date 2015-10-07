'use strict';
var test = require('ava');
var wifiName = require('./');

test(function (t) {
	t.plan(1);

	if (process.env.CI) {
		t.assert(true);
		return;
	}

	wifiName().then(function (name) {
		t.assert(name, name);
	});
});
