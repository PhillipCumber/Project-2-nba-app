///Connecting Express and importing model
let express = require('express')
let Knicks = require('../models/Knicks')

let knicksController = {

    index: (req, res) => {

        Knicks.find()
            .then((player) => {

                res.render('knicks/index', {knicksHBS: player})
            })
    },

    show: (req, res) => {

        res.send('hey fooooooo')
    },

    create: (req, res) => {

        res.send('hellllo fooolooiioilksldn')
    }
}

module.exports = knicksController