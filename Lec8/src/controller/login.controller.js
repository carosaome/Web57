const user = require("../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const existedUser = await user.findOne({
        username,
      });
  
      if (!existedUser) {
        throw new Error('Username hoặc password không đúng');
      }
  
      const matchedPassword = await bcrypt.compare(password, existedUser.password);
  
      if (!matchedPassword) {
        throw new Error('Username hoặc password không đúng');
      }
  
      const userId = existedUser._id;
  
      const token = jwt.sign({
        userId,
      }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 7
      })
  
      res.send({ 
        success: 1, 
        data: { _id: userId, token } 
      });
  
    } catch (err) {
      res.status(400).send({ success: 0, message: err.message})
    }
  }

  module.exports = login