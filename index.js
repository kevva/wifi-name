'use strict';

var exec = require('child_process').exec;

module.exports = function (cb) {
	var cmd;
	var ret;

	if (process.platform === 'darwin') {
		cmd = [
			'/System/Library/PrivateFrameworks/Apple80211.framework/Versions/',
			'Current/Resources/airport -I'
		].join('');
	} else if (process.platform === 'linux') {
		cmd = 'nmcli -t -f active,ssid dev wifi';
	} else {
		throw new Error('Only OS X and Linux systems are supported');
	}

	exec(cmd, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		if (stdout && process.platform === 'darwin') {
			ret = /^\s*SSID: (.+)\s*$/gm.exec(stdout);
			ret = ret.length ? ret[1] : null;
		}

		if (stdout && process.platform === 'linux') {
			ret = /^\s*yes:(.+)\s*$/gm.exec(stdout);
			ret = ret.length ? ret[1].slice(1, ret[1].length - 1) : null;
		}

		cb(null, ret);
	});
};
