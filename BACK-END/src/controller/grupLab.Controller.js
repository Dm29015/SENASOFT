const grupLabService = require('../service/grupLab.Service');

const getAllGrupLabController = async (req, res) => {
    try {
        const grup_lab = await grupLabService.getAllGrupLabService();
        res.status(200).json(grup_lab);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el grupo de laboratorio', error: error.message });
    }
};

const getOneGrupLabController = async (req, res) => {
    try {
        const grup_lab = await grupLabService.getOneGrupLabService(req.params.id);
        res.status(200).json(grup_lab);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el grupo de laboratorio', error: error.message });
    }
};

const createGrupLabController = async (req, res) => {
    try {
        const newGrup = await grupLabService.createGrupLabService(req.body);
        res.status(201).json({ message: 'Grupo de laboratorio creado exitosamente.', newGrup});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el grupo de laboratorio.', error: error.message });
    }
};

module.exports = {
    getAllGrupLabController,
    getOneGrupLabController,
    createGrupLabController
};
