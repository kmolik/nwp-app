const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// db connection
var spis_jednostek = require('./db/models/unit_index')


app.get('/jednostki', (req,res) => {
  spis_jednostek.findAll().then((spis_jednostek) =>{
    res.json(spis_jednostek)
  })
})


app.listen(port, () => console.log(`Server is running at port 3000`))
