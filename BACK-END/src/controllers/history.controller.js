const historyService = require('../services/history.Service');

const getAllHistoryController = async (req, res) => {
    try {
        const history = await historyService.getAllHistoryService();
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la historia', error: error.message });
    }
};

const getOneHistoryController = async (req, res) => {
    try {
        const history = await historyService.getOneHistoryService(req.params.id);
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la historia', error: error.message });
    }
};

const createHistoryController = async (req, res) => {
    try {
        const newhistory = await historyService.createHistoryService(req.body);
        res.status(201).json({ message: 'historia creada exitosamente.', newhistory});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear la historia.', error: error.message });
    }
};

module.exports = {
    getAllHistoryController,
    getOneHistoryController,
    createHistoryController
};
