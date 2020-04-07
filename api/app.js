const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")


const db = require('./db/models/users')
const Role = db.role;

const app = express()
const port = 3000

app.use(cors())

//routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db table models
const spis_jednostek = require('./db/models/unit_index')
const dzialki = require('./db/models/parcel')
const budynki = require('./db/models/buildings')

db.sequelize.sync().then(() => {
  //initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}


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

app.listen(port, () => console.log(`Server is running at port 3000`))
