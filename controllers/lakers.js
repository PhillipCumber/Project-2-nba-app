///Connecting Express and importing model
let express = require('express')
let Lakers = require('../models/Lakers')

let lakersController = {

    index: (req, res) => {

         res.render('app/index')
        // res.send('hey')

        // Lakers.find()
        //     .then((player) => {

        //         res.render('lakers/index', {lakersHBS: player})
        //     })
    }
}

module.exports = lakersController