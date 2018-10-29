require('dotenv').config()
// ///Declared mongoose module
let mongoose = require('mongoose')

// ///Connecting to local server
 mongoose.connect('mongodb://localhost/nba')

// mongoose.connect('open', () => {

//     console.log('Mongoose is connected')
// })


// const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => {
   console.log('Connected to MongoDB')
})

module.exports = mongoose

