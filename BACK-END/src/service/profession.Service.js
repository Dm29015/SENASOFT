const professionRepository = require('../repository/profession.repository');

const getAllProfessionService = async () => {
    try {
        return await professionRepository.findAllProfessional();
    } catch (error) {
        throw error;
    }
};

const getOneProfessionService = async (id) => {
    try {
        return await professionRepository.findProfessionalById(id);
    } catch (error) {
        throw error;
    }
};

const createProfessionService = async (professionData) => {
    try {
        return await professionRepository.createProfessional(professionData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una orden con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllProfessionService,
    getOneProfessionService,
    createProfessionService
};
