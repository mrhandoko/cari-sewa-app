var var mongoose = require('mongoose')
var rentSchema = mongoose.Schema({
}, {
  timestamps: true
})

rentSchema.methods.getRentPriceTotal = function () {

}

var Rent = mongoose.model('User', rentSchema)

module.exports = Rent
