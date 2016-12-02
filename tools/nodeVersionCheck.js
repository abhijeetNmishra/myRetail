/* eslint-disable */
var exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 6) {
    throw new Error('myRetail requires node 6.0 or greater. check .nvmrc file for node version.');
  }
});
