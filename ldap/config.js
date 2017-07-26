const LdapUserService = require('cnpm-ldap-user-service');

let config = {
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

  userService: new LdapUserService({
     url: 'ldaps://ldap.example.org:636',
     bindDN: 'uid=myadminusername,ou=users,dc=example,dc=org',
     bindCredentials: 'mypassword',
     searchBase: 'ou=users,dc=example,dc=org',
     searchFilter: '(uid={{username}})',
     reconnect: true
   }, (ldapUser) => {
     // TODO: return your own authorization object using `ldapUser`
     // TODO: (https://github.com/cnpm/cnpmjs.org/wiki/Use-Your-Own-User-Authorization)
     return {
       login: ldapUser.uid,
       email: ldapUser.mail,
       name: ldapUser.displayName,
       site_admin: config.admins[ldapUser.uid] === ldapUser.mail
     }
   })
};

module.exports = config;

