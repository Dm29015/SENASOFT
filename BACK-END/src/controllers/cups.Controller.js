const cupsService = require('../services/cups.Service');

const getAllCupsController = async (req, res) => {
    try {
        const cups = await cupsService.getAllCupsService();
        res.status(200).json(cups);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el CUP', error: error.message });
    }
};

const getOneCupsController = async (req, res) => {
    try {
        const cup = await cupsService.getOneCupsService(req.params.id);
        res.status(200).json(cup);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el CUP', error: error.message });
    }
};

const createCupsController = async (req, res) => {
    try {
        const newcup = await cupsService.createCupsService(req.body);
        res.status(201).json({ message: 'CUP creado exitosamente.', newcup});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el CUP.', error: error.message });
    }
};

module.exports = {
    getAllCupsController,
    getOneCupsController,
    createCupsController
};
