const servicio = require("./servicios/ServicioFechas");

const anio = " ";

// Pascua
const domingoPascua = servicio.getDomingoPascua(anio);
console.log(`Domingo de Pascua: ${domingoPascua.toISOString().split('T')[0]}`);

// Epifanía (puente)
const epifania = new Date(anio, 0, 6);
const lunesEpifania = servicio.getSiguienteLunes(epifania);
console.log(`Epifanía (lunes): ${lunesEpifania.toISOString().split('T')[0]}`);

// Jueves Santo
const juevesSanto = servicio.agregarDias(domingoPascua, -3);
console.log(`Jueves Santo: ${juevesSanto.toISOString().split('T')[0]}`);

// Sagrado Corazón
const corazonJesus = servicio.getSiguienteLunes(
    servicio.agregarDias(domingoPascua, 68)
);
console.log(`Sagrado Corazón: ${corazonJesus.toISOString().split('T')[0]}`);

// San Pedro y San Pablo
const sanPedro = new Date(anio, 5, 29);
const lunesSanPedro = servicio.getSiguienteLunes(sanPedro);
console.log(`San Pedro y San Pablo: ${lunesSanPedro.toISOString().split('T')[0]}`);