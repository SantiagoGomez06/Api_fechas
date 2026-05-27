const express = require('express');
const mongoose = require('mongoose');
const rutas = require('./rutas/festivos.rutas');
const config = require('./configuracion/bdconfig');
const swaggerConfig = require('./configuracion/swagger');

const app = express();
app.use(express.json());

// 🔹 CONEXIÓN BD
mongoose.connect(`${config.url}/${config.BASEDATOS}`)
    .then(() => console.log("Mongo conectado a festivos"))
    .catch(err => console.log(err));

// 🔹 RUTA BASE
app.get('/', (req, res) => {
    res.send('API de Festivos funcionando 🚀');
});

// 🔹 RUTAS
app.use('/api/festivos', rutas);

// 🔹 SWAGGER 👇
swaggerConfig.configurar(app);

// 🔹 SERVIDOR
const PORT = 3030;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor en: http://localhost:${PORT}`);
});