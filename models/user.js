var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  salt: String,
  phone: String,
  rents: [{type: Schema.Types.ObjectId, ref: 'Rent'}]
}, {
  timestamps: true
})

var User = mongoose.model('User', userSchema)

module.exports = User
