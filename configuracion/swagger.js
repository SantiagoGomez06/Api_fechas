const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

class SwaggerConfig {
    constructor() {
        this.puerto = process.env.PORT || 8080;
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
                        url: `http://localhost:${this.puerto}`,
                        description:'Servidor local'
                    },
                ],
           },
           apis: ['./rutas/*.js', './rutas/*.js'], // 🔥 donde están tus endpoints
        };
        this.spec = swaggerJSDoc(this.options);
    }
    /**
     * Configura Swagger en la aplicación Express recibida
     * @param {express.Application} app
     */
    configurar(app) {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(this.spec));
        console.log(` Documentación Swagger disponible en: http://localhost:${this.puerto}/api-docs`);
    }
}
module.exports = new  SwaggerConfig();