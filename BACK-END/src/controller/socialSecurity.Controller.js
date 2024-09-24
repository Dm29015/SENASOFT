const socialSecurityService = require('../service/socialSecurity.Service');

const getAllSocialSecurityController = async (req, res) => {
    try {
        const social = await socialSecurityService.getAllSocialSecurityService();
        res.status(200).json(social);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la información de la seguridad social', error: error.message });
    }
};

const getOneSocialSecurityController = async (req, res) => {
    try {
        const social = await socialSecurityService.getOneSocialSecurityService(req.params.id);
        res.status(200).json(social);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la información de la seguridad social', error: error.message });
    }
};

const createSocialSecurityController = async (req, res) => {
    try {
        const newSocial = await socialSecurityService.createSocialSecurityService(req.body);
        res.status(201).json({ message: 'Seguridad Social creada exitosamente.', newSocial});

    } catch (error) {
        res.status(500).json({ message: 'Error al crear la información de la seguridad social.', error: error.message });
    }
};

module.exports = {
    getAllSocialSecurityController,
    getOneSocialSecurityController,
    createSocialSecurityController
};
