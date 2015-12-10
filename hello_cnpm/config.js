module.exports = {
  // input your custom config here
  admin: {
    'admin': 'admin@cnpmjs.org'
  },
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
