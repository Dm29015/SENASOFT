const testRepository = require('../repositories/test.repository');

const getAllTestService = async () => {
    try {
        return await testRepository.findAllTest();
    } catch (error) {
        throw error;
    }
};

const getOneTestService = async (id) => {
    try {
        return await testRepository.findTestById(id);
    } catch (error) {
        throw error;
    }
};

const createTestService = async (testData) => {
    try {
        return await testRepository.createTest(testData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una prueba con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllTestService,
    getOneTestService,
    createTestService
};
