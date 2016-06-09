'use strict';
const execa = require('execa');

module.exports = () => {
	const cmd = 'iwgetid';
	const args = ['--raw'];

	return execa.stdout(cmd, args).then(stdout => {
		const ret = stdout.replace('\n', '');

		if (!ret) {
			return Promise.reject(new Error('Could not get SSID'));
		}

		return ret;
	});
};
