const express = require('express')
const router = express.Router()
const postsConstroller = require('../controller/posts.controller')
const checkToken = require('../middlewares/checkToken.middleware')
const checkRole = require('../middlewares/checkRole.middleware')
const user = require('../models/user')

router.get('/', postsConstroller.get)
router.get('/:_id/comments', postsConstroller.getComments)
router.post('/', checkToken, checkRole('user'), postsConstroller.post)
router.get('/:_id', postsConstroller.getPostById)
router.put('/:_id', checkToken, postsConstroller.updatePost)
router.delete('/:_id', checkToken, checkRole('admin'),postsConstroller.deletePost)

module.exports = router