var express = require('express');
var router = express.Router();
var Logins = require('../controllers/logins')


var Controllers = require('../controllers')
var Rents = Controllers.Rents
var Models = require('../models')
var Rent = Models.Rent

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Rentbox', slogan: 'Mau cari barang sewaan ga pake lama' });
});


router.get('/login', Logins.getLogin)
router.post('/login', Logins.signIn)

router.post('/', function(req, res, next) {
  Rent.find({item_name: req.body.query}).populate('owner').then(function(rents) {
    //res.send(rents)
    res.render('results', {rents : rents})
  })
})

module.exports = router;
