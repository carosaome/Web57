const express = require('express')
const commentsController = require('../controller/comments.controller')
const router = express.Router()

router.get('/', commentsController.get)
router.post('/', commentsController.post)
router.put('/:postId/:cmtId', commentsController.updateCmt)
// router.get('/:postId', commentsController.getPostById)
// router.put('/:postId', commentsController.updatePost)
router.delete('/:postId/:cmtId', commentsController.deleteCmt)

module.exports = router