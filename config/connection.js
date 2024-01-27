// import Sequelize library 
const Sequelize = require('sequelize');

// import dotenv for loading environment variables from '.env' file into 'process.env' object
require('dotenv').config();

// declare sequelize variable to be used to store a Sequelize instance
let sequelize; 

if (process.env.JAWSDB_URL){ // checks for JAWSDB_URL environment variable needed for deployment w/Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL); // if exists create new instance of Sequelize using database URL specified
} else { // else create instance of Sequelize using these database connection parameters
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize; 