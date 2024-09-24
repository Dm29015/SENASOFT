const levelRepository = require('../models/nivel');

const findAllLevel = async () => {
    return await  levelRepository.findAll();
};

const findLevelById = async (id) => {
    return await levelRepository.findByPk(id);
};

const createLevel = async (LevelData) => {
    return await levelRepository.create(LevelData);
};

module.exports = {
    findAllLevel,
    findLevelById,
    createLevel
};
