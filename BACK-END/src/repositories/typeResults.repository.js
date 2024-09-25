const typeResultsRepository = require('../models/tipo_resultado');

const findAllTypeResults = async () => {
    return await  typeResultsRepository.findAll();
};

const findTypeResultsById = async (id) => {
    return await typeResultsRepository.findByPk(id);
};

const createTypeResults = async (typeResultsData) => {
    return await typeResultsRepository.create(typeResultsData);
};

module.exports = {
    findAllTypeResults,
    findTypeResultsById,
    createTypeResults
};
