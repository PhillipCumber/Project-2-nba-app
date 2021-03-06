///Connecting to "connection" file
let mongoose = require('./connection')

///Imported team model
let Lakers = require('../models/Lakers')
let Spurs = require('../models/Spurs')
let Knicks = require('../models/Knicks')
let Hawks = require('../models/Hawks')
let teamLogo = require('../models/TeamLogo')

///Custom Information
///Seeds for Lakers model
let LakersPlayers = [

    {
        name: "Lebron James",
        number: 23,
        team: "Los Angeles Lakers",
        img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
    },

    {
        name: "Rajon Rondo",
        number: 9,
        team: "Los Angeles Lakers",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcHyr7GLsvdvBBgpAGjiH3IIlFZgRr37aoXU07gbncocj3d4w",
    },

    {
        name: "Kyle Kuzma",
        number: 10,
        team: "Los Angeles Lakers",
        img: "https://pbs.twimg.com/profile_images/976113578666323968/ZNm7T-pI_400x400.jpg"
    }
]

///Create method
Lakers.create(LakersPlayers)
    .then(lakers => {

        console.log('New Player', lakers)
    })

    /////Seeds for Spurs model
    let SpursPlayers = [

        {
            name: "Lebron James",
            number: 23,
            team: "Los Angeles Lakers",
            img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
        },
    ]

    Spurs.create(SpursPlayers)
    .then(spurs => {

        console.log('New Player', spurs)
    })

    ////Seeds for the Knicks model
    let KnicksPlayers = [

        {
            name: "Lebron James",
            number: 23,
            team: "Los Angeles Lakers",
            img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
        },
    ]

    Knicks.create(KnicksPlayers)
    .then(knicks => {

        console.log('New Player', knicks)
    })

    ////Seeds for the Hawks model
    let HawksPlayers = [

        {
            name: "Lebron James",
            number: 23,
            team: "Los Angeles Lakers",
            img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
        },
    ]

    Hawks.create(HawksPlayers)
    .then(hawks => {

        console.log('New Player', hawks)
    })

    ////Seeds for logo model

    let logo = [

        {

            name: 'Los Angeles Lakers',
            bestPlayer: 'Lebron James',
            rings: 17,
            img: 'https://i.ebayimg.com/images/g/ylAAAOxyyF5RP7b9/s-l300.jpg',
            coach: 'Luke Walton',
            website: 'https://www.nba.com/lakers/',

        },

        {

            name: 'Atlanta Hawks',
            bestPlayer: 'Trae Young',
            rings: 1,
            img: 'https://s3.amazonaws.com/s3.wzgcfm.radio.com/altanta_hawks.png',
            coach: 'Lloyd Pierce',
            website: 'https://www.nba.com/lakers/',
        },

        {

            name: 'San Antonio Spurs',
            bestPlayer: 'Demar Derozan',
            rings: 5,
            img: 'https://pbs.twimg.com/profile_images/991108132876124160/AvXftxBU_400x400.jpg',
            coach: 'Greg Poppivich',
            website: 'https://www.nba.com/lakers/',
        },

        {

            name: 'New York Knicks',
            bestPlayer: 'Kristaps Porzingis',
            rings: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtoTDfrFjLvcD1Y_AEirnfUa3XxgZT8JPdE6U9NQCPtVywNjRi',
            coach: 'David Fizdale',
            website: 'https://www.nba.com/lakers/',
        },

    ]

    teamLogo.create(logo)
    .then(logo => {

        console.log('Team Logo', logo)
    })

    

