var mysql = require('mysql')

var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'nwp',
  multipleStatements: true
})

db.connect((err) => {
  if(!err){
    console.log('DB connection succeded')
  }
  else {
    console.log('DB connection failed \n Error' + JSON.stringify(err, undefined, 2))
  }
})

module.exports = db

