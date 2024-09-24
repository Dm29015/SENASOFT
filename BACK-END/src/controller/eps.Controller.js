const epsService = require('../service/eps.Service');

const getAllEpsController = async (req, res) => {
    try {
        const eps = await epsService.getAllEpsService();
        res.status(200).json(eps);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la EPS', error: error.message });
    }
};

const getOneEpsController = async (req, res) => {
    try {
        const eps = await epsService.getOneEpsService(req.params.id);
        res.status(200).json(eps);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la EPS', error: error.message });
    }
};

const createEpsController = async (req, res) => {
    try {
        const newEps = await epsService.createEpsService(req.body);
        res.status(201).json({ message: 'EPS creada exitosamente.', newEps});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear la EPS.', error: error.message });
    }
};

module.exports = {
    getAllEpsController,
    getOneEpsController,
    createEpsController
};
