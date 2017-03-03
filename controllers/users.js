var Model = require('../models/user')
var hash = require('password-hash')

var User = {

  register : function(req,res){

    let user = {
      fullname: req.body.fullname,
      email: req.body,
      password: hash.generate(req.body.password),
      phone: req.body.phone
    }
    Model.create(user).then(function(req, res){

    })



  }



}

module.exports = User
