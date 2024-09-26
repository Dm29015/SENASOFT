const historyRepository = require('../repositories/history.repository');
const orderRepository = require('../repositories/order.repository')
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

const getHistoryByUserId = async (userId) => {
    try {
        const historia = await historyRepository.findHistoryByUserId(userId);

        if (!historia) {
            throw new Error('No existe una historia clínica para este usuario.');
        }

        return await orderRepository.findOrderByHistoryId(historia.id);
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
    createHistoryService,
    getHistoryByUserId
};
