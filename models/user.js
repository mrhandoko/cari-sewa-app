var mongoose = require('mongoose')
const crypto = require('crypto')

var userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  salt: String,
  address: String,
  phone: String,
  rents: [{type: mongoose.Schema.Types.ObjectId, ref: 'Rent'}]
}, {
  timestamps: true
})

userSchema.pre('save', function (next) {
  var salt = crypto.randomBytes(10).toString('hex')
  const password = this.password
  const hash = crypto.createHmac('sha256', password)
    .update(salt)
  this.password = hash.digest('hex')
  this.salt = salt
  next()
})

var User = mongoose.model('User', userSchema)

module.exports = User
