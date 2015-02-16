'use strict';

var exec = require('child_process').exec;

function filter(stdout, str) {
	var regex = new RegExp(str);

	stdout = stdout.split('\n').filter(function (el) {
		return regex.test(el);
	});

	return stdout.length ? stdout[0].replace(regex, '') : null;
}

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
			ret = filter(stdout, '^SSID: ');
		}

		if (stdout && process.platform === 'linux') {
			ret = filter(stdout, '^yes:');
			ret = ret ? ret.slice(1, ret.length - 1) : null;
		}

		cb(null, ret);
	});
};
