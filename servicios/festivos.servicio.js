const ServicioFechas = require('./servicioFechas');

class FestivosServicio {

    static listarFestivos(anio) {

        anio = parseInt(anio);
        const pascua = ServicioFechas.getDomingoPascua(anio);

        let lista = [

            // 🔹 FIJOS
            { nombre: "Año Nuevo", fecha: new Date(anio, 0, 1) },
            { nombre: "Día del Trabajo", fecha: new Date(anio, 4, 1) },
            { nombre: "Independencia", fecha: new Date(anio, 6, 20) },
            { nombre: "Batalla de Boyacá", fecha: new Date(anio, 7, 7) },
            { nombre: "Navidad", fecha: new Date(anio, 11, 25) },

            // 🔹 LEY EMILIANI
            { nombre: "Reyes Magos", fecha: ServicioFechas.getSiguienteLunes(new Date(anio, 0, 6)) },
            { nombre: "San José", fecha: ServicioFechas.getSiguienteLunes(new Date(anio, 2, 19)) },
            { nombre: "San Pedro y San Pablo", fecha: ServicioFechas.getSiguienteLunes(new Date(anio, 5, 29)) },
            { nombre: "Asunción", fecha: ServicioFechas.getSiguienteLunes(new Date(anio, 7, 15)) },
            { nombre: "Día de la Raza", fecha: ServicioFechas.getSiguienteLunes(new Date(anio, 9, 12)) },
            { nombre: "Todos los Santos", fecha: ServicioFechas.getSiguienteLunes(new Date(anio, 10, 1)) },
            { nombre: "Independencia de Cartagena", fecha: ServicioFechas.getSiguienteLunes(new Date(anio, 10, 11)) },

            // 🔹 PASCUA
            { nombre: "Jueves Santo", fecha: ServicioFechas.agregarDias(pascua, -3) },
            { nombre: "Viernes Santo", fecha: ServicioFechas.agregarDias(pascua, -2) },
            { nombre: "Ascensión", fecha: ServicioFechas.getSiguienteLunes(ServicioFechas.agregarDias(pascua, 40)) },
            { nombre: "Corpus Christi", fecha: ServicioFechas.getSiguienteLunes(ServicioFechas.agregarDias(pascua, 60)) },
            { nombre: "Sagrado Corazón", fecha: ServicioFechas.getSiguienteLunes(ServicioFechas.agregarDias(pascua, 68)) }
        ];

        return lista.map(f => ({
            nombre: f.nombre,
            fecha: f.fecha.toISOString().split('T')[0]
        }));
    }

    static verificarFecha(anio, mes, dia) {

        const fecha = new Date(anio, mes - 1, dia);
        const fechaStr = fecha.toISOString().split('T')[0];

        const festivos = this.listarFestivos(anio);

        const encontrado = festivos.find(f => f.fecha === fechaStr);

        if (encontrado) {
            return {
                esFestivo: true,
                nombre: encontrado.nombre,
                fecha: fechaStr
            };
        }

        return {
            esFestivo: false,
            nombre: null,
            fecha: fechaStr
        };
    }
}

module.exports = FestivosServicio;