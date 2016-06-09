'use strict';
const execa = require('execa');

module.exports = () => {
	const cmd = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';
	const args = ['-I'];

	return execa.stdout(cmd, args).then(stdout => {
		let ret;

		ret = /^\s*SSID: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			return Promise.reject(new Error('Could not get SSID'));
		}

		return ret;
	});
};
