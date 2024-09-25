const testOptionsRepository = require('../repositories/testOptions.repository');

const getAllTestOptionsService = async () => {
    try {
        return await testOptionsRepository.findAllTestOptions();
    } catch (error) {
        throw error;
    }
};

const getOneTestOptionsService = async (id) => {
    try {
        return await testOptionsRepository.findTestOptionsById(id);
    } catch (error) {
        throw error;
    }
};

const createTestOptionsService = async (testData) => {
    try {
        return await testOptionsRepository.createTestOptions(testData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una prueba de opciones con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllTestOptionsService,
    getOneTestOptionsService,
    createTestOptionsService
};
