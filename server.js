///Allows use of express module
let express = require('express')
let app = express()

///Connecting the routes to the server
let routes = require('./routes/index')
// app.use('/', routes)

///Connecting the hbs module
app.set('view engine', 'hbs')

///Connecting to my local server
let PORT = process.env.PORT || 3007
app.listen(PORT, () => {

    console.log(`Server is listening on PORT: ${PORT}`)
})