'use strict';
const execa = require('execa');

module.exports = () => {
	const cmd = 'netsh';
	const args = ['wlan', 'show', 'interface'];

	return execa.stdout(cmd, args).then(stdout => {
		let ret;

		ret = /^\s*SSID\s*: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			return Promise.reject(new Error('Could not get SSID'));
		}

		return ret;
	});
};
