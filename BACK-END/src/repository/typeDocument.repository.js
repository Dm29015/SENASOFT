const typeDocumentRepository = require('../models//tipo_documento');

const findAllTypeDocument = async () => {
    return await  typeDocumentRepository.findAll();
};

const findTypeDocumentById = async (id) => {
    return await typeDocumentRepository.findByPk(id);
};

const createTypeDocument = async (typeDocumentData) => {
    return await typeDocumentRepository.create(typeDocumentData);
};

module.exports = {
    findAllTypeDocument,
    findTypeDocumentById,
    createTypeDocument
};
