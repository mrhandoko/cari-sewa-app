var models = require('../models')
var jwt = require('jsonwebtoken')
var auths = {}

auths.isAuth = function (req, res, next) {
  jwt.verify(req.headers.authentication, process.env.JWT_HASH_CODE, function (err, decoded) {
    if (err) {
      res.send({
        'status': err
      })
    } else {
      next()
    }
  })
}
modul.exports = auths
