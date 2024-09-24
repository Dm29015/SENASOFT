const grupLabRepository = require('../repository/grup_lab.repository');

const getAllGrupLabService = async () => {
    try {
        return await grupLabRepository.findAllGrupLab();
    } catch (error) {
        throw error;
    }
};

const getOneGrupLabService = async (id) => {
    try {
        return await grupLabRepository.findGrupLabById(id);
    } catch (error) {
        throw error;
    }
};

const createGrupLabService = async (grupLabData) => {
    try {
        return await grupLabRepository.createGrupLab(grupLabData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un grupo de laboratorio con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllGrupLabService,
    getOneGrupLabService,
    createGrupLabService
};
