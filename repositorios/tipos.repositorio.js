const mongoose = require('mongoose');

const TipoSchema = new mongoose.Schema({
    id: Number,
    tipo: String,
    modoCalculo: String,
    festivos: Array
});

const Tipo = mongoose.model('tipos', TipoSchema);

const obtenerTipos = async () => {
    return await Tipo.find();
};

module.exports = { obtenerTipos };