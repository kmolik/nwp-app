const parcel = require('../db/models/parcel')

exports.getParcels = (req, res) => {
  parcel.findAll().then((parcel) =>{
    res.json(parcel)
  })
}
