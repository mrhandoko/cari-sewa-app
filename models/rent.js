var var mongoose = require('mongoose')
var rentSchema = mongoose.Schema({
}, {
  timestamps: true
})

var Rent = mongoose.model('User', rentSchema)

module.exports = Rent
