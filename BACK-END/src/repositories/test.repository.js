const test = require('../models/pruebas');

const findAllTest = async () => {
    return await  test.findAll();
};

const findTestById = async (id) => {
    return await test.findByPk(id);
};

const findByProcedimient = async (id) => {
    return await test.findAll({
        where: { id_procedimiento: id }
    });
}

const createTest = async (testData) => {
    return await test.create(testData);
};

module.exports = {
    findAllTest,
    findTestById,
    createTest,
    findByProcedimient
};
