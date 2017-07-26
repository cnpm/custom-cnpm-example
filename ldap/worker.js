var cnpm = require('cnpmjs.org');
var config = require('./config');

cnpm.startWorker(config);
cnpm.startSync(config);
