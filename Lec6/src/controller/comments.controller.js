const comment = require('../models/comments')
class CommentsController {
    async get(req, res) {
        try {
            const postId = req.params
            const foundCmt = await comment.find({postId:postId})
            res.send({success: 1, data: foundCmt})
        } catch (error) {
            res.send('error')
        }
    }
    async post(req, res) {
        try {
            const item = new comment(req.body)
            const data = await item.save()
            res.send({success:1, data:data})
        } catch (error) {
            res.send('error')
        }
    }
    async updateCmt(req, res){
        try {
            const id = req.params
            const content = req.body
            await comment.findByIdAndUpdate( id, content )
            res.send('sucess')
        } catch (error) {
            res.send('error')
        }
    }
      async deleteCmt(req, res){
        try {
            const id = req.params
            await comment.findByIdAndDelete(id)
            res.send('sucess')
        } catch (error) {
            res.send('error')
        }
    }
}

module.exports = new CommentsController