///Connected the connections page to my player model
let mongoose = require('../db/connection')
let Schema = mongoose.Schema

///Player Model
let Player = new Schema({

    name: String,
    number: Number,
    team: String
})

module.exports = mongoose.model('Player', Player)

