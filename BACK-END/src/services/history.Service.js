const historyRepository = require('../repositories/history.repository');

const getAllHistoryService = async () => {
    try {
        return await historyRepository.findAllHistory();
    } catch (error) {
        throw error;
    }
};

const getOneHistoryService = async (id) => {
    try {
        return await historyRepository.findHistoryById(id);
    } catch (error) {
        throw error;
    }
};

const createHistoryService = async (historyData) => {
    try {
        return await historyRepository.createHistory(historyData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una Historia con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllHistoryService,
    getOneHistoryService,
    createHistoryService
};
