const Procediment = require('../models/procedimientos');

const findAllProcediment = async () => {
    return await  Procediment.findAll();
};

const findProcedimentById = async (id) => {
    return await Procediment.findByPk(id);
};

const createProcediment = async (procedimentData) => {
    return await Procediment.create(procedimentData);
};

const findByGrupo = async (idGrupoLab) => {
    return await Procediment.findAll({
        where: { id_grupo_lab: idGrupoLab },
        include: [{
            model: OrdenResult,
            required: false
        }]
    });
};

module.exports = {
    findAllProcediment,
    findProcedimentById,
    createProcediment,
    findByGrupo
};
