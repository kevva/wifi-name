'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function () {
	var cmd = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';
	var args = ['-I'];
	var ret;

	return pify(execFile, Promise)(cmd, args).then(function (stdout) {
		ret = /^\s*SSID: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			return Promise.reject(new Error('Could not get SSID'));
		}

		return ret;
	});
};
