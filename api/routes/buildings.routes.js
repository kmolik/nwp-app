const controller = require('../controllers/buildings.controller')
const { authJwt } = require('../middlewares')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "authorization, Origin, Content-Type, Accept"
    )
    next()
  })

  app.get('/buildings',
  //[authJwt.verifyToken],
  controller.getBuildings
   )

  app.delete('/buildings/delete/:id',
    controller.deleteBuildings
  )
  }

