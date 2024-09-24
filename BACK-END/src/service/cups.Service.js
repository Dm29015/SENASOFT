const cupsRepository = require('../repository/cups.repository');

const getAllCupsService = async () => {
    try {
        return await cupsRepository.findAllCups();
    } catch (error) {
        throw error;
    }
};

const getOneCupsService = async (id) => {
    try {
        return await cupsRepository.findCupsById(id);
    } catch (error) {
        throw error;
    }
};

const createCupsService = async (cupsData) => {
    try {
        return await cupsRepository.createCups(cupsData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un CUP con esa información.');
        }
        throw error;
    }
};


module.exports = {
    getAllCupsService,
    getOneCupsService,
    createCupsService
};
