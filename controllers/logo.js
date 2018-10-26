///Connecting Express and importing model
let express = require('express')
let teamLogo = require('../models/TeamLogo')

let logoController = {

    index: (req, res) => {

        teamLogo.find()
            .then((logo) => {

                res.render('lakers/index', {logoHBS: logo})
            })
    }
}

module.exports = logoController