const cmtModel = require('./comments')
class CommentsController {
    async get(req, res) {
        try {
            const {postId} = req.params
            cmtModel.getComments( postId)
            res.send('sucess')
        } catch (error) {
            res.send('error')
        }
    }
    async post(req, res) {
        try {
            const { content, createdBy, postId } = req.body
            cmtModel.addComments({ content, createdBy, postId })
            res.send('sucess')
        } catch (error) {
            res.send('error')
        }
    }
    async updateCmt(req, res){
        try {
            const { content} = req.body
            const {cmtId, postId} = req.params
            cmtModel.updateCmt({ content, postId, cmtId })
            res.send('sucess')
        } catch (error) {
            res.send('error')
        }
    }
      async deleteCmt(req, res){
        try {
            const {cmtId, postId} = req.params
            cmtModel.deleteCmt({postId, cmtId})
            res.send('sucess')
        } catch (error) {
            res.send('error')
        }
    }
}

module.exports = new CommentsController