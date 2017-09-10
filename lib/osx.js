'use strict';
const execa = require('execa');

module.exports = () => {
	const cmd = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';
	const args = ['-I'];

	return execa.stdout(cmd, args).then(stdout => {
		if (stdout.includes('AirPort: Off')) {
			throw new Error('Wi-Fi is turned off');
		}

		let ret;

		ret = /^\s*SSID: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			throw new Error('Could not get SSID');
		}

		return ret;
	});
};

module.exports.sync = () => {
	const cmd = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';
	const args = ['-I'];
	const stdout = execa.sync(cmd, args).stdout;

	if (stdout.includes('AirPort: Off')) {
		throw new Error('Wi-Fi is turned off');
	}

	let ret;

	ret = /^\s*SSID: (.+)\s*$/gm.exec(stdout);
	ret = ret && ret.length ? ret[1] : null;

	if (!ret) {
		throw new Error('Could not get SSID');
	}

	return ret;
};
