const { sequelize } = require('../db/dbConnection'); 

const Token = require('../model/tokens')

const asyncWrapper = require('../middleware/async')

const createToken = asyncWrapper(async (req,res)=>{
    const token = await Token.create(req.body)
    res.status(201).json(token)
})

const pickWinner = asyncWrapper(async (req,res)=>{
    const {id:productID} = req.params
    const token = await Token.sequelize.query(`SELECT *, COUNT(*) OVER (PARTITION BY "userID") 
    as tokenCount FROM "Tokens" WHERE "productID" = :productID ORDER BY tokenCount DESC LIMIT 1;`, {
        replacements: { productID: Number(productID) },
        type: sequelize.QueryTypes.SELECT,
      });
  
    res.status(201).json({
        msg:'You have won',
        tokenInfo: token
    })
})

module.exports = {
    createToken,
    pickWinner
}