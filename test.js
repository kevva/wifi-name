'use strict';

var test = require('ava');
var wifiname = require('./');

test(function (t) {
	t.plan(2);

	wifiname(function (err, name) {
		t.assert(!err, err);
		t.assert(name);
	});
});
