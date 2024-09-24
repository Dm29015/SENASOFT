const historyRepository = require('../models/historia');

const findAllHistory = async () => {
    return await  historyRepository.findAll();
};

const findHistoryById = async (id) => {
    return await historyRepository.findByPk(id);
};

const createHistory = async (historyData) => {
    return await historyRepository.create(historyData);
};

module.exports = {
    findAllHistory,
    findHistoryById,
    createHistory
};
