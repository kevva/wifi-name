'use strict';

if (process.platform === 'darwin') {
	module.exports = require('osx-wifi-name');
} else if (process.platform === 'win32') {
	module.exports = require('win-wifi-name');
} else {
	module.exports = require('linux-wifi-name');
}
