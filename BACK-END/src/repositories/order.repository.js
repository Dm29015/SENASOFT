const OrderRepository = require('../models/orden');

const findAllOrder = async () => {
    return await  OrderRepository.findAll();
};

const findOrderById = async (id) => {
    return await OrderRepository.findByPk(id);
};

const findOrderByHistoryId = async (id) => {
    return await OrderRepository.findAll({
        where: { id_historia: id }
    });
};

const createOrder = async (OrderData) => {
    return await OrderRepository.create(OrderData);
};

module.exports = {
    findAllOrder,
    findOrderById,
    findOrderByHistoryId,
    createOrder
};
