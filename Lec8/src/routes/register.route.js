const express = require('express')
const registerController = require('../controller/register.controller')
const validateInput = require('../middlewares/validateInput') 
const {loginSchema, registerSchema} = require('../common/validation')
const router = express.Router()

router.post('/', validateInput(registerSchema, 'body'), registerController)


module.exports = router