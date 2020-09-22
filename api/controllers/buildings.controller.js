const buildings = require('../db/models/buildings')

exports.getBuildings = (req, res) => {
  buildings.findAll().then((buildings) => {
    res.json(buildings)
  })
}

exports.deleteBuildings = (req, res) => {
  buildings.destroy({
    where: {id : req.params.id}
  }).then(() => {
    res.send('Item deleted')
  })
}
