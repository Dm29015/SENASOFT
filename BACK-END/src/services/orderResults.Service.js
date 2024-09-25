const orderResultsRepository = require('../repositories/orderResults.repository');

const getAllOrderResultsService = async () => {
    try {
        return await orderResultsRepository.findAllOrderResults();
    } catch (error) {
        throw error;
    }
};

const getOneOrderResultsService = async (id) => {
    try {
        return await orderResultsRepository.findOrderResultsById(id);
    } catch (error) {
        throw error;
    }
};

const createOrderResultsService = async (orderResultsData) => {
    try {
        return await orderResultsRepository.createOrderResults(orderResultsData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una orden de resultados con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllOrderResultsService,
    getOneOrderResultsService,
    createOrderResultsService
};
