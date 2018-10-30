///Connecting express and using the express router function
let express = require('express')
let router = express.Router()
let lakersController = require('../controllers/lakers')
let spursController = require('../controllers/spurs')
let hawksController = require('../controllers/hawks')
let knicksController = require('../controllers/knicks')
let logoController = require('../controllers/logo')

///home page
router.get('/', logoController.index)
// router.get('/:id', logoController.show)


//lakers team page
// router.get('/lakers', lakersController.index)
// router.get('/lakers/:id', lakersController.show)


//hawks team page
// router.get('/hawks', hawksController.index)
// router.get('/hawks/:id', hawksController.show)
// router.post('/hawks', hawksController.create)


//knicks team page
// router.get('/knicks', knicksController.index)
// router.get('/knicks/:id', knicksController.show)


//spurs team page
// router.get('/spurs', spursController.index)
// router.get('/spurs/:id', spursController.show)





module.exports = router
