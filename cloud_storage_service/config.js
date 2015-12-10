module.exports = {
  // input your custom config here
  admin: {
    'admin': 'admin@cnpmjs.org'
  },
  // use qiniu storage service
  nfs: require('qn-cnpm')({
    accessKey: "5UyUq-l6jsWqZMU6tuQ85Msehrs3Dr58G-mCZ9rE",
    secretKey: "YaRsPKiYm4nGUt8mdz2QxeV5Q_yaUzVxagRuWTfM",
    bucket: "qiniu-sdk-test",
    domain: "http://qiniu-sdk-test.qiniudn.com",
  }),
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
