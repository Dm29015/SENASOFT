const typeResultsRepository = require('../repository/typeResults.repository');

const getAllTypeProfessionService = async () => {
    try {
        return await typeResultsRepository.findAllTypeResults();
    } catch (error) {
        throw error;
    }
};

const getOneTypeProfessionService = async (id) => {
    try {
        return await typeResultsRepository.findTypeResultsById(id);
    } catch (error) {
        throw error;
    }
};

const createTypeProfessionService = async (resultsData) => {
    try {
        return await typeResultsRepository.createTypeResults(resultsData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un tipo de documento con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllTypeProfessionService,
    getOneTypeProfessionService,
    createTypeProfessionService
};
