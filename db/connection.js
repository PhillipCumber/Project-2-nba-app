///Declared mongoose module
let mongoose = require('mongoose')

///Connecting to local server
mongoose.connect('mongodb://localhost/nba')

mongoose.connect('open', () => {

    console.log('Mongoose is connected')
})


module.exports = mongoose
