const grupLabRepository = require('../models/grupo_lab');

const findAllGrupLab = async () => {
    return await  grupLabRepository.findAll();
};

const findGrupLabById = async (id) => {
    return await grupLabRepository.findByPk(id);
};

const createGrupLab = async (grupData) => {
    return await grupLabRepository.create(grupData);
};

module.exports = {
    findAllGrupLab,
    findGrupLabById,
    createGrupLab
};
