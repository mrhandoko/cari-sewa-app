var express = require('express');
var router = express.Router();
var Logins = require('../controllers/logins')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rentbox', slogan: 'Mau cari barang sewaan ga pake lama' });
});

router.get('/login', Logins.getLogin)
router.post('/login', Logins.signIn)
module.exports = router;
