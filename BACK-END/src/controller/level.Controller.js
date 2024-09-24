const levelService = require('../service/level.Service');

const getAllLevelController = async (req, res) => {
    try {
        const level = await levelService.getAllLevelService();
        res.status(200).json(level);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el nivel', error: error.message });
    }
};

const getOneLevelController = async (req, res) => {
    try {
        const level = await levelService.getOneLevelService(req.params.id);
        res.status(200).json(level);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el nivel', error: error.message });
    }
};

const createLevelController = async (req, res) => {
    try {
        const newLevel = await levelService.createLevelService(req.body);
        res.status(201).json({ messageel:'nivel creada exitosamente.', newLevel});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el nivel.', error: error.message });
    }
};

module.exports = {
    getAllLevelController,
    getOneLevelController,
    createLevelController
};
