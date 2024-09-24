const typeIdentificationRepository = require('../repository/typeIdentification.repository');

const getAllTypeIdentificationService = async () => {
    try {
        return await typeIdentificationRepository.findAllTypeIdentification();
    } catch (error) {
        throw error;
    }
};

const getOneTypeIdentificationService = async (id) => {
    try {
        return await typeIdentificationRepository.findTypeIdentificationById(id);
    } catch (error) {
        throw error;
    }
};

const createTypeIdentificationService = async (identificationData) => {
    try {
        return await typeIdentificationRepository.createTypeIdentification(identificationData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un tipo de identificación con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllTypeIdentificationService,
    getOneTypeIdentificationService,
    createTypeIdentificationService
};
