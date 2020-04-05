const config = require("../../config/db.config");

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
)

sequelize.authenticate().then(() =>{
  console.log("Database connected")
}).catch((err) => {
  console.log("error: "+ err)
});

module.exports = sequelize
