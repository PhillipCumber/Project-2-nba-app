///Connecting express and using the express router function
let express = require('express')
let router = express.Router()
let lakersController = require('../controllers/lakers')
let logoController = require('../controllers/logo')

///home page
router.get('/', logoController.index)

module.exports = router
/////create a view 