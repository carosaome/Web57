const user = require("../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    try {
      const { username, password } = req.body;
      const existedUser = await user.findOne({ username });
  
      if (existedUser) {
        throw new Error('Username duplicate');
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
  
      const newUser = await user.create({
        username,
        password: hashPassword
      });
      const cloneNewUser = JSON.parse(JSON.stringify(newUser));
  
      res.send({ 
        success: 1, 
        data: {
          ...cloneNewUser,
          password: '',
        }
      });
  
    } catch (err) {
      res.status(400).send({ success: 0, message: err.message})
    }
}
  
module.exports = register