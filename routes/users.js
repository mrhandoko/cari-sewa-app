var express = require('express');
var router = express.Router();
var Controller = require('../controller')
var Users = Controller.Users

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This page for test only');
});

router.get('/getUsers', Users.getUsers)
router.get('/createUser', Users.createUser)
router.get('/updateUser', Users.updateUser)
router.get('/deleteUser', Users.deleteUser)

module.exports = router;
