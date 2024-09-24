const testOptionsRepository = require('../models/orden');

const findAllTestOptions = async () => {
    return await  testOptionsRepository.findAll();
};

const findTestOptionsById = async (id) => {
    return await testOptionsRepository.findByPk(id);
};

const createTestOptions = async (testOpctionData) => {
    return await testOptionsRepository.create(testOpctionData);
};

module.exports = {
    findAllTestOptions,
    findTestOptionsById,
    createTestOptions
};
