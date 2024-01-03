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

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: User signup
 *     description: Endpoint for user signup
 *     parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *          properties:
 *            username:
 *              type: string
 *              description: User's username
 *            password:
 *              type: string
 *              description: User's password
 *          example:
 *            username: user1
 *            password: password123
 *     responses:
 *       200:
 *         description: Successful signup
 *       500:
 *         description: Internal Server Error
 * 
 * /login:
 *   post:
 *     summary: User signup
 *     description: Endpoint for user signup
 *     parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *          properties:
 *            username:
 *              type: string
 *              description: User's username
 *            password:
 *              type: string
 *              description: User's password
 *          example:
 *            username: user1
 *            password: password123
 *     responses:
 *       200:
 *         description: Successful logged in
 *       500:
 *         description: Internal Server Error
 * 
 * /products:
 *   get:
 *     summary: All products
 *     description: Endpoint for products
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productName
 *               - price
 *             properties:
 *               productName:
 *                 type: string
 *                 description: Name of the product
 *               price:
 *                 type: number
 *                 description: Price of the product
 *             example:
 *               username: Pen
 *               password: 200
 *     responses:
 *       200:
 *         description: Successful signup
 *       500:
 *         description: Internal Server Error
 * /products/{id}:
 *   get:
 *     summary: Single products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         minimum: 1
 *         description: Parameter description in Markdown.
 *     responses:
 *       200:
 *         description: Successful signup
 *       500:
 *         description: Internal Server Error
 * /play:
 *   post:
 *     summary: Play for the prize
 *     description: Endpoint of play for the prize
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userID
 *               - productID
 *             properties:
 *               userID:
 *                 type: number
 *                 description: userID
 *               productID:
 *                 type: number
 *                 description: productID
 *             example:
 *               username: 1
 *               password: 3
 *     responses:
 *       200:
 *         description: Successful signup
 *       500:
 *         description: Internal Server Error
 * /play/{id}:
 *   get:
 *     summary: Pick a winner
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         minimum: 1
 *         description: Parameter description in Markdown.
 *     responses:
 *       200:
 *         description: Successful signup
 *       500:
 *         description: Internal Server Error
 */

router.route('/signup').post(signup)
router.route('/login').post(login)

router.route('/products').get(viewAllProducts).post(createProduct)
router.route('/products/:id').get(getOneProduct)

router.route('/play').post(createToken)
router.route('/play/:id').get(pickWinner)

module.exports = router