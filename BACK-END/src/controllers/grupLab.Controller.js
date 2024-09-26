const grupLabService = require('../services/grupLab.Service');

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

const getGruposByOrden = async (req, res) => {
    try {
        const idOrden = req.params.idOrden;
        const grupos = await grupLabService.getGruposByOrden(idOrden);
        res.status(200).json(grupos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllGrupLabController,
    getOneGrupLabController,
    createGrupLabController,
    getGruposByOrden
};
