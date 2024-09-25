const typeProfessionRepository = require('../repositories/typeProfession');

const getAllTypeProfessionService = async () => {
    try {
        return await typeProfessionRepository.findAllTypeProfession();
    } catch (error) {
        throw error;
    }
};

const getOneTypeProfessionService = async (id) => {
    try {
        return await typeProfessionRepository.findTypeProfessionById(id);
    } catch (error) {
        throw error;
    }
};

const createTypeProfessionService = async (professionData) => {
    try {
        return await typeProfessionRepository.createTypeProfession(professionData);
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
