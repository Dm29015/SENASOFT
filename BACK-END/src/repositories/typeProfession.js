const typeProfessionRepository = require('../models/tipo_profesion');

const findAllTypeProfession = async () => {
    return await  typeProfessionRepository.findAll();
};

const findTypeProfessionById = async (id) => {
    return await typeProfessionRepository.findByPk(id);
};

const createTypeProfession = async (typeProfessionData) => {
    return await typeProfessionRepository.create(typeProfessionData);
};

module.exports = {
    findAllTypeProfession,
    findTypeProfessionById,
    createTypeProfession
};
