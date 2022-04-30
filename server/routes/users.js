const router = require('express').Router()
const userController = require('../controllers/userController')

router.put('/:id', userController.update)
router.delete('/:id', userController.delete)
router.get('/', userController.get)
router.put('/:id/follow', userController.follow)
router.put('/:id/unfollow', userController.unfollow)
router.get('/friends/:userId', userController.getFriends)

module.exports = router
