const personService = require('../services/person.Service');

const getAllPersonController = async (req, res) => {
    try {
        const person = await personService.getAllPersonService();
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
    }
};

const getOnePersonController = async (req, res) => {
    try {
        const person = await personService.getOnePersonService(req.params.id);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
    }
};

const createPersonController = async (req, res) => {
    try {
        const newPerson = await personService.createPersonService(req.body);
        res.status(201).json({ message: 'Usuario creada exitosamente.', newPerson});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuarios.', error: error.message });
    }
};

module.exports = {
    getAllPersonController,
    getOnePersonController,
    createPersonController
};
