const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// db connection
var spis_jednostek = require('./db/models/unit_index')
var dzialki = require('./db/models/parcel')


app.get('/jednostki', (req,res) => {
  spis_jednostek.findAll().then((spis_jednostek) =>{
    res.json(spis_jednostek)
  })
})

app.get('/dzialki', (req, res) => {
  dzialki.findAll().then((dzialki) =>{
    res.json(dzialki)
  })
})




app.listen(port, () => console.log(`Server is running at port 3000`))
