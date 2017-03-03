var express = require('express');
var router = express.Router();
var Controller = require('../controllers')
var Users = Controller.Users

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('This page for test only');
// });

router.get('/', Users.getUsers)
router.post('/', Users.createUser)
router.put('/:id', Users.updateUser)
router.delete('/:id', Users.deleteUser)

module.exports = router;
