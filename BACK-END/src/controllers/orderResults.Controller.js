const orderResultsService = require('../services/orderResults.Service');

const getAllOrderResultsController = async (req, res) => {
    try {
        const orderResults = await orderResultsService.getAllOrderResultsService();
        res.status(200).json(orderResults);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el resultado de la orden', error: error.message });
    }
};

const getOneOrderResultsController = async (req, res) => {
    try {
        const orderResults = await orderResultsService.getOneOrderResultsService(req.params.id);
        res.status(200).json(orderResults);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el resultado de la orden', error: error.message });
    }
};

const createOrderResultsController = async (req, res) => {
    try {
        const neworderResults = await orderResultsService.createOrderResultsService(req.body);
        res.status(201).json({ message: 'Resultado de orden creado exitosamente.', neworderResults});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el resultado de la orden.', error: error.message });
    }
};

const getResultadosByOrden = async (req, res) => {
    try {
        const idOrden = req.params.idOrden;
        const resultados = await orderResultsService.getResultadosByOrden(idOrden);
        res.status(200).json(resultados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllOrderResultsController,
    getOneOrderResultsController,
    createOrderResultsController,
    getResultadosByOrden
};
