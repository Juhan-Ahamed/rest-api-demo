const experss = require('express')
const router = experss.Router()
const authenticate = require('../middleware/authenticate')

const contactController = require('../controllers/contact')

// Get 
router.get('/', contactController.getAllContactController)

// Post
router.post('/', authenticate, contactController.postNewContactController)

router.get('/:id', contactController.getSingleContact)

router.put('/:id', authenticate, contactController.editContact)

router.delete('/:id', authenticate, contactController.deleteContact)

module.exports = router