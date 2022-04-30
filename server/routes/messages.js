const router = require('express').Router()
const messageController = require('../controllers/messageController')

router.post('/', messageController.create)
router.get('/:conversationId', messageController.get)

module.exports = router
