var fs = require('fs');
var path =require('path');

fs.existsSync = fs.existsSync || path.existsSync;
var root = path.dirname(__dirname);

var config = {
  enableCluster: true,
  database: {
    db: 'cnpmjs_test',
    username: 'root',
    password: '',
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    pool: {
      maxConnections: 10,
      minConnections: 0,
      maxIdleTime: 30000
    },
    logging: !!process.env.SQL_DEBUG,
  }
};

// load config/config.js, everything in config.js will cover the same key in index.js
// you can put production config in config/config.js
var customConfig = path.join(root, 'config/config.js');
if (fs.existsSync(customConfig)) {
  var options = require(customConfig);
  for (var k in options) {
    config[k] = options[k];
  }
}

module.exports = config;
