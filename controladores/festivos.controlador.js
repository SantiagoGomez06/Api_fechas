const FestivosServicio = require('../servicios/festivos.servicio');

const verificarFecha = async (anio, mes, dia) => {
    return FestivosServicio.verificarFecha(anio, mes, dia);
};

const listarFestivos = async (anio) => {
    return FestivosServicio.listarFestivos(anio);
};

module.exports = {
    verificarFecha,
    listarFestivos
};