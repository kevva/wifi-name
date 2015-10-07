#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const meow = require('meow');
const wifiName = require('./');

meow(`
	Usage
	  $ wifi-name
	  wu-tang lan
`);

wifiName().then(name => console.log(name));
