const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'GraphQL API Documentation using JavaScript',
            version: '1.0.0',
        },
    },
    apis: ['./swaggerRoutes.js'], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
