'use strict';
const base = require('./base.conf.js');
const argv = require('yargs').argv;

exports.config = Object.assign({}, base.config, {
  capabilities: [{
    browserName: (argv.headless)? 'phantomjs' : 'chrome'
  }],
  reporters: ['spec'],
  logLevel: 'error',
  services: ['selenium-standalone']
});