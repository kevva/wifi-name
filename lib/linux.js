'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function () {
	var cmd = 'iwgetid';
	var args = ['--raw'];

	return pify(execFile, Promise)(cmd, args).then(function (stdout) {
		var ret = stdout.replace('\n', '');

		if (!ret) {
			return Promise.reject(new Error('Could not get SSID'));
		}

		return ret;
	});
};
