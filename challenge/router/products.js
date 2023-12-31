const express = require('express')

const router = express.Router()

const {
    signup,
    login
} = require('../controller/user')


const {
    viewAllProducts,
    getOneProduct,
    createProduct
} = require('../controller/products')

const {
    createToken,
    pickWinner
} = require('../controller/tokens')

router.route('/signup').post(signup)
router.route('/login').get(login)

router.route('/products').get(viewAllProducts).post(createProduct)
router.route('/products/:id').get(getOneProduct)

router.route('/play').post(createToken).get(pickWinner)

module.exports = router