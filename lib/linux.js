'use strict';
const execa = require('execa');

module.exports = () => {
	const cmd = 'iwgetid';
	const args = ['--raw'];

	return execa.stdout(cmd, args).then(stdout => {
		const ret = stdout.replace('\n', '');

		if (!ret) {
			throw new Error('Could not get SSID');
		}

		return ret;
	});
};

module.exports.sync = () => {
	const cmd = 'iwgetid';
	const args = ['--raw'];
	const ret = execa.sync(cmd, args).stdout.replace('\n', '');

	if (!ret) {
		throw new Error('Could not get SSID');
	}

	return ret;
};
