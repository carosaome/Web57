const jwt = require('jsonwebtoken')

const checkToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        throw new Error('Not found token');
    }
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const { userId } = data;
    if (!userId) {
        throw new Error('Authorization fail');
    }
  
    res.locals.userId = userId
    next()
}
module.exports = checkToken