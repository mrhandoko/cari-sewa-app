var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rentbox', slogan: 'Mau cari barang sewaan ga pake lama' });
});

module.exports = router;
