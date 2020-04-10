const parcel = require('../db/models/parcel')

module.exports = function(app) {
  app.get('/parcels', (req, res) => {
    parcel.findAll().then((parcel) =>{
      res.json(parcel)
    })
  })
}
