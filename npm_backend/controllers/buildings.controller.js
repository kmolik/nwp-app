const buildings = require('../db/models/buildings')

exports.getBuildings = (req, res) => {
  buildings.findAll().then((buildings) => {
    res.json(buildings)
  })
}
