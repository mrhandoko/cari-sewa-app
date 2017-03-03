var mongoose = require('mongoose')

var rentSchema = mongoose.Schema({
  item_name: String,
  rent_price: Number,
  rent_duration: Number,
  owner: [{type: Schema.Types.ObjectId, ref: 'User'}]
  rent_status : Boolean
}, {
  timestamps: true
})

rentSchema.methods.getRentPriceTotal = function () {
  return rent_price * rent_duration
}


var Rent = mongoose.model('Rent', rentSchema)

module.exports = Rent
