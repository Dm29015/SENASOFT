const typeIdentificationRepository = require('../models/tipo_identificacion');

const findAllTypeIdentification = async () => {
    return await  typeIdentificationRepository.findAll();
};

const findTypeIdentificationById = async (id) => {
    return await typeIdentificationRepository.findByPk(id);
};

const createTypeIdentification = async (identificationData) => {
    return await typeIdentificationRepository.create(identificationData);
};

module.exports = {
    findAllTypeIdentification,
    findTypeIdentificationById,
    createTypeIdentification
};
