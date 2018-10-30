///Connecting Express and importing model
let express = require('express')
let Lakers = require('../models/Lakers')

let lakersController = {

    index: (req, res) => {

        Lakers.find()
            .then((player) => {

                res.render('lakers/index', {lakersHBS: player})
            })
    },

    show: (req, res) => {

        res.send('hey fooooooo')
        let lakersId = req.params.id

        Lakers.findById(lakersId)
            .then((players) => {

                res.render('lakers/index', {lakersHBS: players})
            })
    },

    create: (req, res) => {

        res.send('hellllo fooolooiioilksldn')
    }
}

module.exports = lakersController