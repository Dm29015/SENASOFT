const testOpctionsService = require('../service/testOptions.Service');

const getAllTestOptionsController = async (req, res) => {
    try {
        const testOptions = await testOpctionsService.getAllTestOptionsService();
        res.status(200).json(testOptions);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las opciones de los exámenes', error: error.message });
    }
};

const getOneTestOptionsController = async (req, res) => {
    try {
        const testOptions = await testOpctionsService.getOneTestOptionsService(req.params.id);
        res.status(200).json(testOptions);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las opciones de los exámenes', error: error.message });
    }
};

const createTestOptionsController = async (req, res) => {
    try {
        const newtestOptions = await testOpctionsService.createTestOptionsService(req.body);
        res.status(201).json({ message: 'Opción de exámen creada exitosamente.', newtestOptions});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear las opciones de los exámenes.', error: error.message });
    }
};

module.exports = {
    getAllTestOptionsController,
    getOneTestOptionsController,
    createTestOptionsController
};
