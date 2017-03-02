var express = require('express');
var router = express.Router();
var Controller = require('../controller')
var User = Controller.User

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This page for test only');
});

router.get('/getUsers', User.getUsers)
router.get('/createUser', User.createUser)
router.get('/updateUser', User.updateUser)
router.get('/deleteUser', User.deleteUser)

module.exports = router;
