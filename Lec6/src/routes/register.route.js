const express = require('express')
const registerController = require('../controller/register.controller')
const router = express.Router()

// router.get('/:postId', registerController.get)
router.post('/', registerController)
// router.put('/:_id', registerController.updateCmt)
// router.get('/:postId', registerController.getPostById)
// router.put('/:postId', registerController.updatePost)
// router.delete('/:_id', registerController.deleteCmt)

module.exports = router