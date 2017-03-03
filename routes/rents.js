var express = require('express')
var router = express.Router()
var Controller = require('../controllers')
var Rents = Controller.Rents

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', Rents.getRents)
router.get('/:id', Rents.getRent)
router.post('/', Rents.createRent)
router.put('/:id', Rents.updateRent)
router.delete('/:id', Rents.deleteRent)

module.exports = router
