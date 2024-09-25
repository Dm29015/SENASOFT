const procemientService = require('../services/procediment.Service');

const getAllProcedimientsController = async (req, res) => {
    try {
        const procediment = await procemientService.getAllProcedimentService();
        res.status(200).json(procediment);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los procedimientos', error: error.message });
    }
};

const getOneProcedimientsController = async (req, res) => {
    try {
        const procediment = await procemientService.getOneProcedimentService(req.params.id);
        res.status(200).json(procediment);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los procedimientos', error: error.message });
    }
};

const createProcedimientsController = async (req, res) => {
    try {
        const newProcedimient = await procemientService.createProcedimentService(req.body);
        res.status(201).json({ message: 'Procedimientos creados exitosamente.', newProcedimient});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear los procedimientos.', error: error.message });
    }
};

module.exports = {
    getAllProcedimientsController,
    getOneProcedimientsController,
    createProcedimientsController
};
