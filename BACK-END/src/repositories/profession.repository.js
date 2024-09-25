const professionalRepository = require('../models/profesional');

const findAllProfessional = async () => {
    return await  professionalRepository.findAll();
};

const findProfessionalById = async (id) => {
    return await professionalRepository.findByPk(id);
};

const createProfessional = async (professionalData) => {
    return await professionalRepository.create(professionalData);
};

module.exports = {
    findAllProfessional,
    findProfessionalById,
    createProfessional
};
