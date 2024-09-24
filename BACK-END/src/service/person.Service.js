const personRepository = require('../repository/person.repository');

const getAllPersonService = async () => {
    try {
        return await personRepository.findAllPerson();
    } catch (error) {
        throw error;
    }
};

const getOnePersonService = async (id) => {
    try {
        return await personRepository.findPersonById(id);
    } catch (error) {
        throw error;
    }
};

const createPersonService = async (personData) => {
    try {
        return await personRepository.createPerson(personData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe una orden con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllPersonService,
    getOnePersonService,
    createPersonService
};
