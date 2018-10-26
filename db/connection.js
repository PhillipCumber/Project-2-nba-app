///Declared mongoose module
let mongoose = require('mongoose')

///Connecting to local server
mongoose.connect('mongodb://localhost/nba')

mongoose.connect('open', () => {

    console.log('Mongoose is connected')
})


///Connecting to heroku
mongoose.connect('mongodb://heroku_g4jxcnvw:mqq5s9hub4u0qoiggmu68iihhv@ds161069.mlab.com:61069/heroku_g4jxcnvw')

module.exports = mongoose
