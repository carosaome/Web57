const express = require('express')
const commentsController = require('../controller/comments.controller')
const router = express.Router()

router.get('/:postId', commentsController.get)
router.post('/', commentsController.post)
router.put('/:_id', commentsController.updateCmt)
// router.get('/:postId', commentsController.getPostById)
// router.put('/:postId', commentsController.updatePost)
router.delete('/:_id', commentsController.deleteCmt)

module.exports = router