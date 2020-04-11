const buildings = require('../db/models/buildings')
const controller = require('../controllers/buildings.controller')


module.exports = function(app) {
  app.get('/buildings', controller.getBuildings)
  }

