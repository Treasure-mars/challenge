const express = require('express')
const app = express()
const products = require('./router/products')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler')

app.use(express.json())

app.use('/api/v1',products)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = ()=>{
    try {
        app.listen(5000, ()=>{
            console.log("Server listening on 5000...");
        })
    } catch (error) {
        console.log(error);
    }
}

start()