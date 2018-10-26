///Connecting to "connection" file
let mongoose = require('./connection')

///Imported team model
let Lakers = require('../models/Lakers')
let teamLogo = require('../models/TeamLogo')

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
        team: "Los Angeles Lakers",
        img: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjw7LSf5KTeAhWNna0KHeBiBsYQjRx6BAgBEAU&url=https%3A%2F%2Fthebiglead.com%2F2018%2F10%2F21%2Ffloyd-mayweather-rajon-rondo-chris-paul-fight-cp3%2F&psig=AOvVaw2cOXeOmPENZ-IdyPsLSdnP&ust=1540666511281589",
    },

    {
        name: "Kyle Kuzma",
        number: 10,
        team: "Los Angeles Lakers",
        img: "https://www.seriouseats.com/2018/10/how-to-make-a-pumpkin-loaf.html"
    }
]

///Create method
Lakers.create(LakersPlayers)
    .then(lakers => {

        console.log('New Player', lakers)
    })

    ////Seeds for logo model

    let logo = [

        {

            name: 'Los Angeles Lakers',
            bestPlayer: 'Lebron James',
            rings: 17,
            img: 'https://www.google.com/search?q=la+lakers&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjb_Oae66TeAhVMcq0KHUklAb0Q_AUIECgD&biw=1440&bih=736#imgrc=3YMolCTMts9mFM:',
            coach: 'Luke Walton'
        },

        {

            name: 'Atlanta Hawks',
            bestPlayer: 'Trae Young',
            rings: 1,
            img: 'https://www.google.com/search?biw=1440&bih=736&tbm=isch&sa=1&ei=jmrTW8f_GcLTjwTC2bPIDA&q=atl+hawks&oq=atl+hawks&gs_l=img.3..0i10l10.32427.34789..34858...0.0..0.95.507.8......1....1..gws-wiz-img.......0j35i39j0i67.wi782eq_its#imgrc=wfTBpxzJf9ViTM:',
            coach: 'Lloyd Pierce'
        },

        {

            name: 'San Antonio Spurs',
            bestPlayer: 'Demar Derozan',
            rings: 5,
            img: 'https://www.google.com/search?biw=1440&bih=736&tbm=isch&sa=1&ei=smrTW5TyBIv-jwST_rG4Bg&q=sa+spurs&oq=sa+spurs&gs_l=img.3..0l3j0i24l7.19741.22824..22927...0.0..0.87.842.13......1....1..gws-wiz-img.....0..0i10i67j35i39j0i67j0i10j0i5i30j0i8i30.wl5rbkCPbXI#imgrc=kVKlbBhDIUsMNM:',
            coach: 'Greg Poppivich'
        },

        {

            name: 'New York Knicks',
            bestPlayer: 'Kristaps Porzingis',
            rings: 1,
            img: 'https://www.google.com/search?biw=1440&bih=736&tbm=isch&sa=1&ei=ymrTW82HBauCjwShyI_ICg&q=ny+knicks&oq=ny+knicks&gs_l=img.3.0.0l10.21670.27255..27748...2.0..2.173.1203.17j1......2....1..gws-wiz-img.....0..0i67j0i24j0i5i30j0i8i30j0i10j35i39j0i30j0i10i24.TZlMTgDhczE#imgrc=4QMijyDHGuf4rM:',
            coach: 'David Fizdale'
        },

    ]

    teamLogo.create(logo)
    .then(logo => {

        console.log('Team Logo', logo)
    })

    

