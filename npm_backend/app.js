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
require('./routes/buildings.routes')(app)
require('./routes/parcel.routes')(app)

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(port, () => console.log(`Server is running at port 3000`))
