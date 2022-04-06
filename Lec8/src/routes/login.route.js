const express = require('express')
const loginController = require('../controller/login.controller')
const validateInput = require('../middlewares/validateInput') 
const {loginSchema, registerSchema} = require('../common/validation')
const router = express.Router()

router.post('/', validateInput(loginSchema, 'body'), loginController)

module.exports = router