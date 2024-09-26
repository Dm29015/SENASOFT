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

const getResultadosByOrden = async (idOrden) => {
    const resultados = await orderResultsRepository.findByOrden(idOrden);
    if (!resultados) {
        throw new Error('No se encontraron resultados para esta orden.');
    }
    return resultados;
};

module.exports = {
    getAllOrderResultsService,
    getOneOrderResultsService,
    createOrderResultsService,
    getResultadosByOrden
};
