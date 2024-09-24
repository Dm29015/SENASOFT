const procedimentRepository = require('../models/procedimientos');

const findAllProcediment = async () => {
    return await  procedimentRepository.findAll();
};

const findProcedimentById = async (id) => {
    return await procedimentRepository.findByPk(id);
};

const createProcediment = async (procedimentData) => {
    return await procedimentRepository.create(procedimentData);
};

module.exports = {
    findAllProcediment,
    findProcedimentById,
    createProcediment
};
