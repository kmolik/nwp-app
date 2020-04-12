const controller = require('../controllers/parcel.controller')
const { authJwt } = require('../middlewares')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "authorization, Origin, Content-Type, Accept"
    )
    next()
  })

  app.get('/parcels',
  [authJwt.verifyToken],
  controller.getParcels)
}
