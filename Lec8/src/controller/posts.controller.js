const jwt = require('jsonwebtoken')
const post = require('../models/posts')
const comment = require('../models/comments')
const user = require('../models/user')
class PostsConstroller {
    async get(req, res) {
        try {
            const allPosts = await post.find({})
            res.send({ success: 1, data: allPosts })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async post(req, res) {
        try {
            
            console.log(res.locals)
            const userId = res.locals.userId
            const existedUser = await user.findById(userId);

            if (!existedUser) {
                throw new Error('Authorization fail');
            }
            const { content } = req.body;
            const newPost = await post.create({
                content,
                createdBy: existedUser._id,
            });


            res.send({ success: 1, data: newPost })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async getPostById(req, res) {
        try {

            const foundPost = await post.findById(req.params)


            res.send({ success: 1, data: foundPost })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async updatePost(req, res) {
        try {
            const userId = res.locals.userId
            const postId = req.params
            const content = req.body

            const foundPost = await post.findOneAndUpdate({ createdBy: userId, _id: postId }, content)

            res.send({ success: 1, data: foundPost })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async deletePost(req, res) {
        try {
            const id = req.params
            await post.findByIdAndDelete(id)
            res.send({ success: 1 })

        } catch (error) {
            res.send(error)
        }
    }
    async getComments(req, res) {
        try {
            console.log(req.params);
            const data = await comment.find({ postId: req.params })
            res.send({ success: 1, data: data })

        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = new PostsConstroller