const express = require('express')
const loginController = require('../controller/login.controller')
const router = express.Router()

router.post('/', loginController)
// router.put('/:_id', loginController.updateCmt)
// router.get('/:postId', loginController.getPostById)
// router.put('/:postId', loginController.updatePost)
// router.delete('/:_id', loginController.deleteCmt)

module.exports = router