const orderService = require('../services/order.Service');

const getAllOrderController = async (req, res) => {
    try {
        const order = await orderService.getAllOrderService();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la orden', error: error.message });
    }
};

const getOneOrderController = async (req, res) => {
    try {
        const order = await orderService.getOneOrderService(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la orden', error: error.message });
    }
};

const getOrderByUserId = async (req, res) => {
    try {
        const order = await orderService.getOrderByUserId(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las órdenes.', error: error.message });
    }
};

const createOrderController = async (req, res) => {
    try {
        const newOrder = await orderService.createOrderService(req.body);
        res.status(201).json({ message: 'Orden creada exitosamente.', newOrder});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear la orden.', error: error.message });
    }
};

module.exports = {
    getAllOrderController,
    getOneOrderController,
    getOrderByUserId,
    createOrderController
};
