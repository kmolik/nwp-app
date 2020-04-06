const { verifySignUp } = require("../middlewares")
const controller = require("../controllers/auth.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    req.body
    res.header(
      "Access-Control-Allow-Headers",
      "x-accesss-token, Origin, Content-Type, Accept"
    )
    next()
    app.post(
      "/auth/signup",
      [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
      ],
      controller.signup
    )

    app.post("/auth/signin", controller.signin)
  })
}
