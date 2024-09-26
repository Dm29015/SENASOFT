const testService = require('../services/test.Service');

const getAllTestController = async (req, res) => {
    try {
        const test = await testService.getAllTestService();
        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los exámenes', error: error.message });
    }
};

const getOneTestController = async (req, res) => {
    try {
        const test = await testService.getOneTestService(req.params.id);
        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los exámenes', error: error.message });
    }
};

const getTestByProcediment = async (req, res) =>{
    try {
        const idProcedimiento = req.params.idProcedimiento;
        const pruebas = await testService.getTestByProcediment(idProcedimiento);
        res.status(200).json(pruebas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
}

const createTestController = async (req, res) => {
    try {
        const newTest = await testService.createTestService(req.body);
        res.status(201).json({ message: 'Exámen creada exitosamente.', newTest});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear los exámenes.', error: error.message });
    }
};

module.exports = {
    getAllTestController,
    getOneTestController,
    createTestController,
    getTestByProcediment
};
