const epsRepository = require('../models/eps');

const findAllEps = async () => {
    return await  epsRepository.findAll();
};

const findEpsById = async (id) => {
    return await epsRepository.findByPk(id);
};

const createEps = async (epsData) => {
    return await epsRepository.create(epsData);
};

module.exports = {
    findAllEps,
    findEpsById,
    createEps
};
