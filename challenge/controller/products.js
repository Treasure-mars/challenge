const Products = require('../model/products')

const asyncWrapper = require('../middleware/async')

const viewAllProducts = asyncWrapper(async (req,res)=>{
    const products = await Products.findAll()
    res.status(200).json({ products })
})

const getOneProduct = asyncWrapper(async (req,res)=>{
    const {id:productID} = req.params
    const product = await Products.findOne({where: { id: productID }})
    res.status(200).json({ product })
})

const createProduct = asyncWrapper(async (req,res)=>{
    const product = await Products.create(req.body)
    res.status(200).json({ product })
})

module.exports = {
    viewAllProducts,
    getOneProduct,
    createProduct
}