const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express()
const products = require('./router/products')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler')

app.use(express.json())

// Swagger setup
const options = {
    swaggerDefinition: require('./swagger.json'),
    apis: ['./router/*.js'], // Specify the path to your route files
  };
  
  const swaggerSpec = swaggerJsdoc(options);
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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