require('dotenv').config();
const path = require('path');
const { knexSnakeCaseMappers } = require('objection');

const pathConfig = (directory) => path.join(__dirname, 'src', 'database', directory);
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : DB_HOST,
      port: DB_PORT,
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: pathConfig('migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: pathConfig('seeds'),
    },
    ...knexSnakeCaseMappers,
  },
  production: {
    client: 'postgresql',
    connection: {
      host : DB_HOST,
      port: DB_PORT,
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: pathConfig('migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: pathConfig('seeds'),
    },
    ...knexSnakeCaseMappers,
  },
};
