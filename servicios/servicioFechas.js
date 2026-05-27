class ServicioFechas {

    // 🔹 Domingo de Pascua
    static getDomingoPascua(anio) {
        const a = anio % 19;
        const b = anio % 4;
        const c = anio % 7;
        const d = (19 * a + 24) % 30;

        const dias = d + (2 * b + 4 * c + 6 * d + 5) % 7;

        let dia = 15 + dias;
        let mes = 3; // marzo

        if (dia > 31) {
            dia -= 31;
            mes = 4; // abril
        }

        return new Date(anio, mes - 1, dia);
    }

    // 🔹 Siguiente lunes (Ley Emiliani)
    static getSiguienteLunes(fecha) {
        const dFecha = new Date(fecha);
        const diaSemana = dFecha.getDay();

         let diasParaLunes = (8 - diaSemana) % 7;
        if (diasParaLunes === 0) diasParaLunes = 7;

        return this.agregarDias(dFecha, diasParaLunes);
    }

    static agregarDias(fecha, dias) {
        const dFecha = new Date(fecha);
        dFecha.setDate(dFecha.getDate() + dias);
        return dFecha;
    }
}

module.exports = ServicioFechas;