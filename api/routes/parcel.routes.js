const controller = require('../controllers/parcel.controller')

module.exports = function(app) {
  app.get('/parcels', controller.getParcels)
}
