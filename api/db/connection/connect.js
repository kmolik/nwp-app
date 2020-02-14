const Sequelize = require('sequelize');

const db = new Sequelize('nwp','root', '',{
  host: '127.0.0.1',
  dialect: 'mysql',
})

db.authenticate().then(() =>{
  console.log("Database connected")
}).catch((err) => {
  console.log("error: "+ err)
});

module.exports = db
