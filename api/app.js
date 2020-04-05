const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
//const jwt = require('jsonwebtoken')

const db = require('./db/models/users')
const Role = db.role;

const app = express()
const port = 3000

app.use(cors())

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db table models
const spis_jednostek = require('./db/models/unit_index')
const dzialki = require('./db/models/parcel')
const budynki = require('./db/models/buildings')

db.sequelize.sync();


/*
app.post('/posts', verifyToken, (req,res) => {

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403)
    }
    else {
      res.json({
        message: 'Post created...',
        authData
      })
    }
  })
})

app.post('/login', (req,res) => {
  const user = {
    id: 1,
    name: 'admin'
  }

  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    })
  })
})
*/

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

app.get('/budynki', (req, res) => {
  budynki.findAll().then((budynki) => {
    res.json(budynki)
  })
})

//verify Token
/*
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']

  if(typeof bearerHeader !== 'undefined') {

    const bearer = bearerHeader.split(' ')

    const bearerToken = bearer[1]

    req.token = bearerToken

    next()
  }
  else {
    res.sendStatus(403)
  }
}
*/
app.listen(port, () => console.log(`Server is running at port 3000`))
