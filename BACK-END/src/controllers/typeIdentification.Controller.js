const typeIdentificationService = require('../services/typeIdentification.Service');

const getAllTypeIdentificationController = async (req, res) => {
    try {
        const typeIdentification = await typeIdentificationService.getAllTypeIdentificationService();
        res.status(200).json(typeIdentification);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de identificación', error: error.message });
    }
};

const getOneTypeIdentificationController = async (req, res) => {
    try {
        const typeIdentification = await typeIdentificationService.getOneTypeIdentificationService(req.params.id);
        res.status(200).json(typeIdentification);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tipo de identificación', error: error.message });
    }
};

const createTypeIdentificationController = async (req, res) => {
    try {
        const newTypeIdentification = await typeIdentificationService.createTypeIdentificationService(req.body);
        res.status(201).json({ message: 'Tipo de identificación creado exitosamente.', newTypeIdentification});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el tipo de identificación.', error: error.message });
    }
};

module.exports = {
    getAllTypeIdentificationController,
    getOneTypeIdentificationController,
    createTypeIdentificationController
};
