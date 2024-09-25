const typeIdentificationRepository = require('../models/tipo_identificacion');

const findAllTypeIdentification = async () => {
    return await  typeIdentificationRepository.findAll();
};

const findTypeIdentificationById = async (id) => {
    return await typeIdentificationRepository.findByPk(id);
};

const findTypeDocumentByName = async (nameDocument) => {
    return await TypeDocument.findOne({
        where: { nombre_documento: nameDocument }
    });
};

const createTypeIdentification = async (identificationData) => {
    return await typeIdentificationRepository.create(identificationData);
};

module.exports = {
    findTypeDocumentByName,
    findAllTypeIdentification,
    findTypeIdentificationById,
    createTypeIdentification
};
