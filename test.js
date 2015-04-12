'use strict';

var test = require('ava');
var wifiName = require('./');

test(function (t) {
	t.plan(2);

	if (process.env.CI) {
		t.assert(true);
		t.assert(true);
		return;
	}

	wifiName(function (err, name) {
		t.assert(!err, err);
		t.assert(name, name);
	});
});
