const OrdenResult = require('../models/orden_resultados');
const Prueba = require('../models/pruebas')

const findAllOrderResults = async () => {
    return await  OrdenResult.findAll();
};

const findOrderResultsById = async (id) => {
    return await OrdenResult.findByPk(id);
};

const createOrderResults = async (orderResultData) => {
    return await OrdenResult.create(orderResultData);
};

const findByOrden = async (idOrden) => {
    return await OrdenResult.findAll({
        where: { id_orden: idOrden },
        include: [{
            model: Prueba,
            required: false
        }]
    });
};

module.exports = {
    findAllOrderResults,
    findOrderResultsById,
    createOrderResults,
    findByOrden
};
