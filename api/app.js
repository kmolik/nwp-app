const express = require('express')
var db = require('./db/connection/connect')
const app = express()
const port = 3000

app.get('/jednostki', (req,res) => {
  db.query('SELECT * FROM spis_jednostek', (err,result) =>{
    if(!err) {
      res.send(result)
    }
    else{
      console.log(err);
    }
  })
})

app.listen(port, () => console.log(`Server is running at port 3000`))
