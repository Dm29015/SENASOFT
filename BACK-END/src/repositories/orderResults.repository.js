const OrderResultRepository = require('../models/orden_resultados');

const findAllOrderResults = async () => {
    return await  OrderResultRepository.findAll();
};

const findOrderResultsById = async (id) => {
    return await OrderResultRepository.findByPk(id);
};

const createOrderResults = async (orderResultData) => {
    return await OrderResultRepository.create(orderResultData);
};

module.exports = {
    findAllOrderResults,
    findOrderResultsById,
    createOrderResults
};
