const grupLabRepository = require('../repositories/grup_lab.repository');

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

const getGruposByOrden = async (idOrden) => {
    const grupos = await grupLabRepository.findByOrden(idOrden);
    if (!grupos) {
        throw new Error('No se encontraron grupos para esta orden.');
    }
    return grupos;
};

module.exports = {
    getAllGrupLabService,
    getOneGrupLabService,
    createGrupLabService,
    getGruposByOrden
};
