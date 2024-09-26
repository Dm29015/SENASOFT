const procedimentRepository = require('../repositories/procediment.repository');

const getAllProcedimentService = async () => {
    try {
        return await procedimentRepository.findAllProcediment();
    } catch (error) {
        throw error;
    }
};

const getOneProcedimentService = async (id) => {
    try {
        return await procedimentRepository.findProcedimentById(id);
    } catch (error) {
        throw error;
    }
};

const createProcedimentService = async (procedimentData) => {
    try {
        return await procedimentRepository.createProcediment(procedimentData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un procedimiento con esa información.');
        }
        throw error;
    }
};

const getProcedimientosByGrupo = async (idGrupoLab) => {
    const procedimientos = await procedimentRepository.findByGrupo(idGrupoLab);
    if (!procedimientos) {
        throw new Error('No se encontraron procedimientos para este grupo.');
    }
    return procedimientos;
};

module.exports = {
    getAllProcedimentService,
    getOneProcedimentService,
    createProcedimentService,
    getProcedimientosByGrupo
};
