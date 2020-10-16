
require('dotenv').config();
//console.log(`using username ${process.env.DB_USER} with password ${process.env.DB_PASSWORD}`);

module.exports={
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": "migration_dev",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": process.env.DB_USER,
      "password":  process.env.DB_PASSWORD,
      "database": "migration_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.DB_USER,
      "password":  process.env.DB_PASSWORD,
      "database": "migration_prod",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  };
  