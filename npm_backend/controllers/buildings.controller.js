const buildings = require('../db/models/buildings')


exports.getBuildings = (req, res) => {
  buildings.findAll().then((buildings) => {
    res.json(buildings)
  })
}

exports.deleteBuildings = (req, res) => {
  const id = req.params.id;
  buildings.destroy({
    where: {id: id}
  }).then(() => {
    res.send('row was deleted!')
  })
}
