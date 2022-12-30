const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'donti'),
      user: env('DATABASE_USERNAME', 'dontiadmin'),
      password: env('DATABASE_PASSWORD', 'Artless.1'),
    },
    useNullAsDefault: true,
  },
});
