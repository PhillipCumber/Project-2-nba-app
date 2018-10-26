///Connecting express and using the express router function
let express = require('express')
let router = express.Router()
let lakersController = require('../controllers/lakers')

///home page
router.get('/', lakersController.index)

module.exports = router
/////create a view 