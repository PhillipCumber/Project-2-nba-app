///Connecting Express and importing model
let express = require('express')
let teamLogo = require('../models/TeamLogo')

let logoController = {

    index: (req, res) => {

        teamLogo.find()
            .then((logo) => {

                res.render('logo/index', {logoHBS: logo})
            })
    },

    // show: (req, res) => {

    //     let homeId = req.params.id

    //     teamLogo.findById(homeId)
    //         .then((team) => {

    //             res.render('logo/index', {

    //                 logoHBS: team
    //             })
    //         })
    // }
}

module.exports = logoController