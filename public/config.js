module.exports = {
  // input your custom config here
  admin: {
    'admin': 'admin@cnpmjs.org'
  },
  // enable private mode, only admin can publish, other use just can sync package from source npm
  enablePrivate: false,

  // registry scopes, if don't set, means do not support scopes
  scopes: [
    '@lnpm',
  ],

  // redirect @cnpm/private-package => private-package
  // forward compatbility for update from lower version cnpmjs.org
  adaptScope: true,

  // force user publish with scope
  // but admins still can publish without scope
  forcePublishWithScope: true,

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
