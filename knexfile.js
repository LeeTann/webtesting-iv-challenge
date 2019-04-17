// Update with your config settings.

const localPgConnection = {
  host: 'localhost',
  database: 'lambda',
  user: 'student',
  password: 'hired'
}

const prodDbConnection = process.env.DATABASE_URL || localPgConnection

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/videogames.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testvideogames.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  
  production: {
    client: 'postgresql',
    connection: prodDbConnection, // an object or a string
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds',
    },
  }

};
