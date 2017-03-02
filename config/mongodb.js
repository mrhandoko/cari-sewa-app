var mongoose = require('mongoose')
require('dotenv').config()
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`)
var db = mongoose.connection

module.exports = db
