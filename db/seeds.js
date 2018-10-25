///Connecting to "connection" file
let mongoose = require('./connection')

///Imported team model
let Lakers = require('../models/Lakers')

///Custom Information
let LakersPlayers = [

    {
        name: "Lebron James",
        number: 23,
        team: "Los Angeles Lakers"
    },

    {
        name: "Rajon Rondo",
        number: 9,
        team: "Los Angeles Lakers"
    },

    {
        name: "Kyle Kuzma",
        number: 0,
        team: "Los Angeles Lakers"
    }
]

///Create method
Lakers.create(LakersPlayers)
    .then(lakers => {

        console.log('New Player', lakers)
    })


