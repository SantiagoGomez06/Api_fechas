const express = require('express');
const router = express.Router();

const {verificarFecha, listarFestivos} = require('../controladores/festivos.controlador');
/**
 * @swagger
 * /api/festivos/verificar/{anio}/{mes}/{dia}:
 *   get:
 *     summary: Verificar si una fecha es festiva
 *     tags: [Festivos]
 *     parameters:
 *       - in: path
 *         name: anio
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: mes
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: dia
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resultado de la verificación
 */
router.get('/verificar/:anio/:mes/:dia', async (req, res) => {
    const { anio, mes, dia } = req.params;
    const resultado = await verificarFecha(anio, mes, dia);
    res.json(resultado);
});

/**
 * @swagger
 * /api/festivos/listar/{anio}:
 *   get:
 *     summary: Obtener todos los festivos de un año
 *     tags: [Festivos]
 *     parameters:
 *       - in: path
 *         name: anio
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de festivos
 */
router.get('/listar/:anio', async (req, res) => {
    const { anio } = req.params;
    const resultado = await listarFestivos(anio);
    res.json(resultado);
});

router.get('/obtener/:anio', async (req, res) => {
    const { anio } = req.params;
    const resultado = await listarFestivos(anio);
    res.json(resultado);
});

module.exports = router;