const socialRepository = require('../repository/socialSecurity');

const getAllSocialSecurityService = async () => {
    try {
        return await socialRepository.findAllSocialSecurity();
    } catch (error) {
        throw error;
    }
};

const getOneSocialSecurityService = async (id) => {
    try {
        return await socialRepository.findSocialSecurityById(id);
    } catch (error) {
        throw error;
    }
};

const createSocialSecurityService = async (socialData) => {
    try {
        return await socialRepository.createSocialSecurity(socialData);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Ya existe un registro de seguridad social con esa información.');
        }
        throw error;
    }
};

module.exports = {
    getAllSocialSecurityService,
    getOneSocialSecurityService,
    createSocialSecurityService
};
