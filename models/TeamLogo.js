///Connected the connections page to my player model
let mongoose = require('../db/connection')
let Schema = mongoose.Schema

///Team Logo Model
let TeamLogo = new Schema({

    name: String,
    bestPlayer: String,
    rings: String,
    img: String,
    coach: String

})

module.exports = mongoose.model('Logo', TeamLogo)