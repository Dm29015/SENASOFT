const epsRepository = require('../repositories/eps.repository');

const getAllEpsService = async () => {
    try {
        return await epsRepository.findAllEps();
    } catch (error) {
        throw error;
    }
};

const getOneEpsService = async (id) => {
    try {
        return await epsRepository.findEpsById(id);
    } catch (error) {
        throw error;
    }
};

const createEpsService = async (epsData) => {
    try {
        return await epsRepository.createEps(epsData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una EPS con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllEpsService,
    getOneEpsService,
    createEpsService
};
