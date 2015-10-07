'use strict';
const execFile = require('child_process').execFile;
const pify = require('pify');

module.exports = () => {
	const cmd = 'iwgetid';
	const args = ['--raw'];

	return pify(execFile)(cmd, args).then(stdout => {
		const ret = stdout.replace('\n', '');

		if (!ret) {
			return Promise.reject(new Error('Could not get SSID'));
		}

		return ret;
	});
};
