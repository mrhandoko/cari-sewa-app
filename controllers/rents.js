var Models = require('../models')
var Rent = Models.Rent
var Rents = {}

Rents.getRents = function (req, res, next) {
  Rent.find({})
    .then(function (rents) {
      res.send(rents)
    })
}

Rents.createRent = function (req, res, next) {
  var user = new Rent(req.body)
  user.save()
    .then(function (rent) {
      res.send({
        status: 'Ok',
        message: 'New rent has been created',
        user: user
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

Rents.updateRent = function (req, res, next) {
  Rent.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, rent) {
      res.send({
        status: 'Ok',
        message: `${req.body.item_name} has been updated`,
        updated_rent: rent
      })
    })
}

Rents.deleteRent = function (req, res, next) {
  Rent.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The rent has been deleted`
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}
Rents.searchRents = function (req, res) {
  Rent.find({item_name:req.params.query})
    .then(function (rents) {
      res.send(rents)
    })
}
module.exports = Rents
