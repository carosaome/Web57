
const posts = require('./posts.route')
const comments = require('./comments.route')
function route(app){
    app.use('/api/posts', posts)
    app.use('/api/comments', comments)
}

module.exports = route