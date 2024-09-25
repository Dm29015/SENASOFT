const testRepository = require('../models/pruebas');

const findAllTest = async () => {
    return await  testRepository.findAll();
};

const findTestById = async (id) => {
    return await testRepository.findByPk(id);
};

const createTest = async (testData) => {
    return await testRepository.create(testData);
};

module.exports = {
    findAllTest,
    findTestById,
    createTest
};
