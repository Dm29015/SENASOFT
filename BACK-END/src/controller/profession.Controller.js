const professionService = require('../service/profession.Service');

const getAllProfessionController = async (req, res) => {
    try {
        const profession = await professionService.getAllProfessionService();
        res.status(200).json(profession);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las profesiones', error: error.message });
    }
};

const getOneProfessionController = async (req, res) => {
    try {
        const profession = await professionService.getOneProfessionService(req.params.id);
        res.status(200).json(profession);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las profesiones', error: error.message });
    }
};

const createProfessionController = async (req, res) => {
    try {
        const newProfession = await professionService.createProfessionService(req.body);
        res.status(201).json({ message: 'Profesión creada exitosamente.', newProfession});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear las profesiones.', error: error.message });
    }
};

module.exports = {
    getAllProfessionController,
    getOneProfessionController,
    createProfessionController
};
