const typeProfessionService = require('../services/typeProfession.Service');

const getAllTypeProfessionController = async (req, res) => {
    try {
        const typeProfession = await typeProfessionService.getAllTypeProfessionService();
        res.status(200).json(typeProfession);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de profesión', error: error.message });
    }
};

const getOneTypeProfessionController = async (req, res) => {
    try {
        const typeProfession = await typeProfessionService.getOneTypeProfessionService(req.params.id);
        res.status(200).json(typeProfession);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de profesión', error: error.message });
    }
};

const createTypeProfessionController = async (req, res) => {
    try {
        const newTypeProfession = await typeProfessionService.createTypeProfessionService(req.body);
        res.status(201).json({ message: 'Tipo de profesión creado exitosamente.', newTypeProfession});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el tipo de profesión.', error: error.message });
    }
};

module.exports = {
    getAllTypeProfessionController,
    getOneTypeProfessionController,
    createTypeProfessionController
};
