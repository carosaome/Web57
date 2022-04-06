
const posts = require('./posts.route')
const comments = require('./comments.route')
const login = require('./login.route')
const register = require('./register.route')
function route(app){
    app.use('/api/posts', posts)
    app.use('/api/comments', comments)
    app.use('/api/auth/login', login)
    app.use('/api/auth/register', register)
}

module.exports = route