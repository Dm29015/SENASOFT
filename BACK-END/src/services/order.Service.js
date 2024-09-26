const orderRepository = require('../repositories/order.repository');

const getAllOrderService = async () => {
    try {
        return await orderRepository.findAllOrder();
    } catch (error) {
        throw error;
    }
};

const getOneOrderService = async (id) => {
    try {
        return await orderRepository.findOrderById(id);
    } catch (error) {
        throw error;
    }
};

const getOrderByUserId = async (id) => {
    try {
        return await orderRepository.findOrderByHistoryId(id);
    } catch (error) {
        throw error;
    }
};

const createOrderService = async (levelData) => {
    try {
        return await orderRepository.createOrder(levelData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una orden con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllOrderService,
    getOneOrderService,
    getOrderByUserId,
    createOrderService
};
