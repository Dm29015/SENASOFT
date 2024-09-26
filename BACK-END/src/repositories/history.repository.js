const history = require('../models/historia');

const findAllHistory = async () => {
    return await  history.findAll();
};

const findHistoryById = async (id) => {
    return await history.findByPk(id);
};

// Repositorio de Historia
const findHistoryByUserId = async (userId) => {
    return await history.findOne({
        where: { id_persona: userId }
    });
};

const createHistory = async (historyData) => {
    return await history.create(historyData);
};

module.exports = {
    findAllHistory,
    findHistoryById,
    createHistory,
    findHistoryByUserId
};
