const personRepository = require('../models/persona');

const findAllPerson = async () => {
    return await  personRepository.findAll();
};

const findPersonById = async (id) => {
    return await personRepository.findByPk(id);
};

const createPerson = async (personData) => {
    return await personRepository.create(personData);
};

module.exports = {
    findAllPerson,
    findPersonById,
    createPerson
};
