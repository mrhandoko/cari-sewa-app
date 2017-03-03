var User = require('../models').User
var jwt = require('jsonwebtoken')
var crypto = require('crypto')

var Logins = {}
Logins.getLogin = function (req, res) {
  res.render('login', {})
}
Logins.signIn = function (req, res) {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    var salt = user.salt
    const password = req.body.password
    const hash = crypto.createHmac('sha256', password)
      .update(salt)

    if (user.password === hash.digest('hex')) {
      var token = jwt.sign({ user: user.email }, 'shhhhh')
      res.send({
        status: 'Login success',
        authentication: token
      })
    } else {
      res.json({
        status: 'Wrong Password'
      })
    }
  }).catch(function () {
    res.json({
      status: 'There is no account with email : ' + req.body.email
    })
  })
},
Logins.user = function(req, res, next){
  jwt.verify(req.headers.auth, 'shhhhh', function(err, decoded) {
    if(decoded.user.email != user.email){
      res.send('Bukan admin')
    }else{
      User.find().then(function(data){
      res.send(data)
      })
    }
  })
}

module.exports = Logins
