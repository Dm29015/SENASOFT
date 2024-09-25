const levelRepository = require('../repositories/level.repository');

const getAllLevelService = async () => {
    try {
        return await levelRepository.findAllLevel();
    } catch (error) {
        throw error;
    }
};

const getOneLevelService = async (id) => {
    try {
        return await levelRepository.findLevelById(id);
    } catch (error) {
        throw error;
    }
};

const createLevelService = async (levelData) => {
    try {
        return await levelRepository.createLevel(levelData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una EPS con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllLevelService,
    getOneLevelService,
    createLevelService
};
