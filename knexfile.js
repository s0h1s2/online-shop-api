// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: 'better-sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },
    development: {
    client: 'mysql2',
    connection: {
      host:process.env.DB_HOST,
      database: process.env.DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
