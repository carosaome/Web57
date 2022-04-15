const express = require('express')
const router = express.Router()
const productsController = require('../controller/products.controller')


router.get('/', productsController.get)
router.post('/', productsController.getComments)


module.exports = router