const Person = require('../models/persona');

const findAllPerson = async () => {
    return await  Person.findAll();
};

const findPersonById = async (id) => {
    return await Person.findByPk(id);
};

const findPersonByDocument = async (numberDocument) => {
    return await Person.findOne({
        where: { numero_documento: numberDocument }
    });
};

const createPerson = async (personData) => {
    return await Person.create(personData);
};

module.exports = {
    findAllPerson,
    findPersonById,
    findPersonByDocument,
    createPerson
};
