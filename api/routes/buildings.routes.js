const buildings = require('../db/models/buildings')

module.exports = function(app) {
  app.get('/buildings',//to musi być w kontrolerze
  (req, res) => {
    buildings.findAll().then((buildings) => {
      res.json(buildings)
    })
  })
}
