///Connecting Express and importing model
let express = require('express')
let Spurs = require('../models/Spurs')

let spursController = {

    index: (req, res) => {

        Spurs.find()
            .then((player) => {

                res.render('spurs/index', {spursHBS: player})
            })
    },

    show: (req, res) => {

        res.send('hey fooooooo')
    },

    create: (req, res) => {

        res.send('hellllo fooolooiioilksldn')
    }
}

module.exports = spursController