const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

class SwaggerConfig {
    constructor() {

        this.options = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'API Festivos',
                    version: '1.0.0',
                    description: 'API para validar fechas festivas en Colombia'
                },
                servers: [
                    {
                        url: 'http://localhost:8090',
                        description: 'Servidor Docker'
                    },
                ],
            },
            apis: ['./rutas/*.js'],
        };

        this.spec = swaggerJSDOC(this.options);
    }

    configurar(app) {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(this.spec));

        console.log(
            'Documentación Swagger disponible en: http://localhost:8090/api-docs'
        );
    }
}

module.exports = new SwaggerConfig();