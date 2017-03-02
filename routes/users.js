var express = require('express');
var router = express.Router();
var User = require('../models/user')
var jwt = require('jsonwebtoken');
const crypto = require('crypto');

/* GET home page. */
//SignUp User
router.post('/signup', function(req, res) {
  db.user.create(req.body).then(function(data){
    res.send(data)
  })
})

router.post('/signin', function(req, res, next){
  db.user.findOne({
    where : {username : req.body.username}
  }).then(function(data){
    console.log(data);
    const hash = crypto.createHmac('sha256', data.salt)
                       .update(req.body.password)
                       .digest('hex');

    if(hash == data.password) {
      var token = jwt.sign({ username: data.username, role:data.role}, 'jo');
      res.send(token)
    }
  })
})
router.get('/users', function(req, res, next){
  jwt.verify(req.headers.auth, 'jo', function(err, decoded) {
    if(decoded.role != 'admin'){
      res.send('Bukan admin')
    }else{
      db.user.findAll().then(function(data){
      res.send(data)
      })
    }
  })
})

router.get('/users/:id', function(req, res){
  jwt.verify(req.headers.auth, 'jo', function(err, decoded) {
    if(decoded.role == 'admin'){
      db.user.findAll(req.params.id).then(function(data){
        res.send(data)
      })
    }else if(decoded.role != 'admin' && decoded.id == req.params.id){
      db.user.findById(req.parmas.id).then(function(data){
        res.send(data)
      })
    }else{
      res.send("Tidak bisa akses data")
    }
  })
})


module.exports = router;
