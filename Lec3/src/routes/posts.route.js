const express = require('express')
const postsConstroller = require('../controller/posts.controller')
const router = express.Router()

router.get('/:postId/comments', postsConstroller.getComments)
router.post('/', postsConstroller.post)
router.get('/:postId', postsConstroller.getPostById)
router.put('/:postId', postsConstroller.updatePost)
router.delete('/:postId', postsConstroller.deletePost)

module.exports = router