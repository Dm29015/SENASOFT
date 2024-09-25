const cupsRepository = require('../models/cups');

const findAllCups = async () => {
    return await  cupsRepository.findAll();
};

const findCupsById = async (id) => {
    return await cupsRepository.findByPk(id);
};

const createCups = async (CupsData) => {
    return await cupsRepository.create(CupsData);
};

module.exports = {
    findAllCups,
    findCupsById,
    createCups
};
