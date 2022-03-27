const express = require('express')
const postsConstroller = require('../controller/posts.controller')
const router = express.Router()

router.get('/', postsConstroller.get)
router.get('/:_id/comments', postsConstroller.getComments)
router.post('/', postsConstroller.post)
router.get('/:_id', postsConstroller.getPostById)
router.put('/:_id', postsConstroller.updatePost)
router.delete('/:_id', postsConstroller.deletePost)

module.exports = router