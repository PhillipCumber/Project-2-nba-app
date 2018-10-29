require('dotenv').config()
/////Allows use of express module
let express = require('express')
let app = express()

///Connecting mongoose to heroku
let mongoose = require('mongoose');
mongoose.connect('process.env.MONGODB_URI'); 


///Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '/public')));

///Connecting the routes to the server
let routes = require('./routes/index')
app.use('/', routes)

///Connecting the hbs module
app.set('view engine', 'hbs')

///Connecting to my local server
let PORT = process.env.PORT || 3007
app.listen(PORT, () => {

    console.log(`Server is listening on PORT: ${PORT}`)
})
