var Models = require('../models')
var Rent = Models.Rent
var gmaps = require('@google/maps')
require('dotenv').config()

var Rents = {}

const gmapClient = gmaps.createClient({
  key: process.env.GMAP_KEY
})

Rents.getRents = function (req, res, next) {
  Rent.find({})
    .then(function (rents) {

      // res.render('rents/index', {rents: rents})
      res.json(rents)
    })
}

Rents.getRent = function (req, res, next) {
  Rent.findOne({_id: req.params.id})
    .populate('owner')
    .then(function (rent) {

      // res.render('rents/index', {rent: rent})
      // console.log(rent.owner.address)
      gmapClient.geocode({
        address: rent.owner.address
      }, function (err, response) {
        // console.log(response)
        // console.log(rent)
        // console.log(response)
        // function(response) {
        //
        // }
        // rent['maps'] = response
        // console.log('ini rent ', rent)

        res.send({item: rent, maps: response})
      })
    })
}

Rents.createRent = function (req, res, next) {
  var user = new Rent(req.body)
  user.save()
    .then(function (rent) {
      // res.send({
      //   status: 'Ok',
      //   message: 'New rent has been created',
      //   user: user
      // })
      this.getRents()
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
      // res.send({
      //   status: 'Ok',
      //   message: `${req.body.item_name} has been updated`,
      //   updated_rent: rent
      // })
      res.render('rents/edit', {rent: rent})
    })
}

Rents.deleteRent = function (req, res, next) {
  Rent.remove({
    _id: req.params.id
  })
    .then(function () {
      // res.send({
      //   status: 'Ok',
      //   message: `The rent has been deleted`
      // })
      this.getRents()
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
  Rent.find({item_name: req.params.query})
    .then(function (rents) {
      res.send(rents)
    })
}
module.exports = Rents
