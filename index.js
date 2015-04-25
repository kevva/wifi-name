'use strict';

var execFile = require('child_process').execFile;

module.exports = function (cb) {
	var cmd;
	var args;
	var ret;

	if (process.platform === 'darwin') {
		cmd = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';
		args = ['-I'];
	} else if (process.platform === 'linux') {
		cmd = 'iwgetid';
		args = ['--raw'];
	} else if (process.platform === 'win32') {
		cmd = 'netsh';
		args = ['wlan', 'show', 'interface'];
	} else {
		throw new Error('Only OS X, Linux and Windows systems are supported');
	}

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		if (stdout && process.platform === 'darwin') {
			ret = /^\s*SSID: (.+)\s*$/gm.exec(stdout);
			ret = ret && ret.length ? ret[1] : null;
		}

		if (stdout && process.platform === 'linux') {
			ret = stdout.replace('\n', '');
		}

		if (stdout && process.platform === 'win32') {
			ret = /^\s*SSID\s*: (.+)\s*$/gm.exec(stdout);
			ret = ret && ret.length ? ret[1] : null;
		}

		if (!ret) {
			cb(new Error('Could not get SSID'));
			return;
		}

		cb(null, ret);
	});
};
