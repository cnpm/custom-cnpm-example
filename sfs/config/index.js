var fs = require('fs');
var path =require('path');
var mkdirp = require('mkdirp');

fs.existsSync = fs.existsSync || path.existsSync;
var root = path.dirname(__dirname);
var distdir = path.join(root, 'dists');
var logdir = path.join(root, '.tmp', 'logs');

var sfsConfig = {
  rootDir: distdir,
  logdir: logdir,
  port: 8081,
  nodes: [{ip: '127.0.0.1', port: 8081}],
  credentials: ['sfsadmin', 'sfsadmin123'],
};

var config = {
  enableCluster: true,
  sfsConfig: sfsConfig,
  nfs: require('sfs-client').create(sfsConfig),
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
  },
  syncModel: 'exist'
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

mkdirp.sync(distdir);
mkdirp.sync(logdir);

module.exports = config;
