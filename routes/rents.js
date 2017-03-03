var express = require('express');
var router = express.Router();
var Controller = require('../controllers')
var Rents = Controller.Rents

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getRents', Rents.getRents)
router.get('/createRent', Rents.createRent)
router.get('/updateRent', Rents.updateRent)
router.get('/deleteRent', Rents.deleteRent)

module.exports = router;
