const typeResultsService = require('../services/typeResults.Service');

const getAllTypeResultsController = async (req, res) => {
    try {
        const typeResults = await typeResultsService.getAllTypeProfessionService();
        res.status(200).json(typeResults);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de resultado', error: error.message });
    }
};

const getOneTypeResultsController = async (req, res) => {
    try {
        const typeResults = await typeResultsService.getOneTypeProfessionService(req.params.id);
        res.status(200).json(typeResults);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de resultado', error: error.message });
    }
};

const createTypeResultsController = async (req, res) => {
    try {
        const newTypeResults = await typeResultsService.createTypeProfessionService(req.body);
        res.status(201).json({ message: 'Tipo de resultado creado exitosamente.', newTypeResults});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el tipo de resultado.', error: error.message });
    }
};

module.exports = {
    getAllTypeResultsController,
    getOneTypeResultsController,
    createTypeResultsController
};
