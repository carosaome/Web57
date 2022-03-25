const postModel = require('./posts')

class PostsConstroller{
    async get(req, res){
        try {
            const allPosts = await postModel.getPosts();
    
            res.send({ success: 1, data: allPosts })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async post(req, res){
        const { content, createdBy } = req.body;

        try {
            const newPost = await postModel
                .createPost({ content, createdBy });
            res.send({ success: 1, data: newPost })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async getPostById(req, res){
        try {
            // path param
            const { postId } = req.params;
    
            const foundPost = await postModel.getPost(postId)
    
            res.send({ success: 1, data: foundPost })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async updatePost(req, res){
        try {
            // path param
            const { postId } = req.params;
            const { content } = req.body;
    
            await postModel.updatePost({ content, postId })
    
            res.send({ success: 1 })
        } catch (err) {
            res.send({ success: 0, data: null, message: err.message })
        }
    }
    async deletePost(req, res){
        try {
            const {postId} = req.params
            await postModel.deletePost(postId)
            res.send({ success: 1 })
    
        } catch (error) {
            res.send(error)
        }
    }
    async getComments(req, res){
        try {
            const {postId} = req.params
            const data = await postModel.getComments(postId)
            res.send({ success: 1, data: data})
    
        } catch (error) {
            res.send(error)
        }
    }
    
}

module.exports = new PostsConstroller