const grupLabRepository = require('../models/grupo_lab');
const Procedimiento = require('../models/procedimientos')

const findAllGrupLab = async () => {
    return await  grupLabRepository.findAll();
};

const findGrupLabById = async (id) => {
    return await grupLabRepository.findByPk(id);
};

const createGrupLab = async (grupData) => {
    return await grupLabRepository.create(grupData);
};

const findByOrden = async (idOrden) => {
    return await grupLabRepository.findAll({
        include: [{
            model: Procedimiento,
            required: false,
            include: [{
                model: OrdenResult,
                where: { id_orden: idOrden },
                required: true
            }]
        }]
    });
};

module.exports = {
    findAllGrupLab,
    findGrupLabById,
    createGrupLab,
    findByOrden
};
