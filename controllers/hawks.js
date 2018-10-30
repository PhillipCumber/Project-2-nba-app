///Connecting Express and importing model
let express = require('express')
let Hawks = require('../models/Hawks')

let hawksController = {

    index: (req, res) => {

        Hawks.find()
            .then((player) => {

                res.render('hawks/index', {hawksHBS: player})
            })
    },

    show: (req, res) => {

        res.send('hey fooooooo')
    },

    create: (req, res) => {

        res.send('hellllo fooolooiioilksldn')
    },

    create: (req, res) => {

        let insertPlayer = {

            name: req.body.name
        }
        res.redirect('/hawks')
    }
}

module.exports = hawksController