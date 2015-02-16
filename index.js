'use strict';

var exec = require('child_process').exec;

module.exports = function (cb) {
	var cmd;

	if (process.platform === 'darwin') {
		cmd = [
			'/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/',
			'Resources/airport -I | grep -e "\\bSSID:" | sed -e "s/^.*SSID: //"'
		].join('');
	} else if (process.platform === 'linux') {
		cmd = 'nmcli -t -f active,ssid dev wifi | egrep \'^yes\' | cut -d\\\' -f2';
	} else {
		throw new Error('Only OS X and Linux systems are supported');
	}

	exec(cmd, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, stdout.trim());
	});
};
