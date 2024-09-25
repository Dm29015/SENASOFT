const typeDocumentRepository = require('../repositories/typeDocument.repository');

const getAllTypeDocumentService = async () => {
    try {
        return await typeDocumentRepository.findAllTypeDocument();
    } catch (error) {
        throw error;
    }
};

const getOneTypeDocumentService = async (id) => {
    try {
        return await typeDocumentRepository.findTypeDocumentById(id);
    } catch (error) {
        throw error;
    }
};

const createTypeDocumentService = async (documentData) => {
    try {
        return await typeDocumentRepository.createTypeDocument(documentData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un tipo de documento con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllTypeDocumentService,
    getOneTypeDocumentService,
    createTypeDocumentService
};
