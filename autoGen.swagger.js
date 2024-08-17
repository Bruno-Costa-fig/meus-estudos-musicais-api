const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "Meus estudos Musicais",
        version: "1.0.0",
        description: "API de controle de estudos musicais",
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ["http"],
    schemes: ["http"],
    components: {
        securitySchemes: {
            apiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: 'Token de Autenticação'
            }
        }
    },
    security: [
        {
            apiKeyAuth: []
        }
    ],
}

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js'], // Caminho para os arquivos de rotas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };