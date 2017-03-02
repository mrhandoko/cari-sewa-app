var var mongoose = require('mongoose')
var userSchema = mongoose.Schema({
}, {
  timestamps: true
})

var User = mongoose.model('User', userSchema)

module.exports = User
