const jwt = require('jsonwebtoken')
const username = 'web@gmail.com'
jwt.sign({
    data: {username}
  }, 'webfullstack', { expiresIn: '72h' });