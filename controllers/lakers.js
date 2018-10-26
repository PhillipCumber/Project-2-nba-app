///Connecting Express and importing model
let express = require('express')
let Lakers = require('../models/Lakers')

let lakersController = {

    index: (req, res) => {

        Lakers.find()
            .then((player) => {

                res.render('lakers/index', {lakersHBS: player})
            })
    }
}

module.exports = lakersController