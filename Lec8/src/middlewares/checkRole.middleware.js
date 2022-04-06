const UserModel = require('../models/user')

const checkRole = (role) => {
    return async(req, res, next) => {
        
            const userId =  res.locals.userId
            const foundUser = await UserModel.findById(userId)
            const foundRole = foundUser.role
            if (foundRole !== role) {
                res.send({ success: 0, message: 'Role not true' })
                return
            }
            next()
       
    }
}

module.exports = checkRole