///Connecting to "connection" file
let mongoose = require('./connection')

///Imported team model
let Lakers = require('../models/Lakers')

///Custom Information
let LakersPlayers = [

    {
        name: "Lebron James",
        number: 23,
        team: "Los Angeles Lakers",
        img: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwihlo_fqKTeAhUKXa0KHb0_CkgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.express.co.uk%2Fsport%2Fothersport%2F1034377%2FLakers-vs-Rockets-LIVE-STREAM-LeBron-James-home-debut&psig=AOvVaw0T-oWxeb6GN5BMmbQnBzwy&ust=1540650552307393"
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

    

