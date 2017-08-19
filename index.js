'use strict';

if (process.platform === 'darwin') {
	module.exports = require('./lib/osx');
	module.exports.sync = require('./lib/osx').sync;
} else if (process.platform === 'win32') {
	module.exports = require('./lib/win');
	module.exports.sync = require('./lib/win').sync;
} else {
	module.exports = require('./lib/linux');
	module.exports.sync = require('./lib/linux').sync;
}
