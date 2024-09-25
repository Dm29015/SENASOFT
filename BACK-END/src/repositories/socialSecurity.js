const socialSecurityRepository = require('../models/reg_seg_social');

const findAllSocialSecurity = async () => {
    return await  socialSecurityRepository.findAll();
};

const findSocialSecurityById = async (id) => {
    return await socialSecurityRepository.findByPk(id);
};

const createSocialSecurity = async (socialData) => {
    return await socialSecurityRepository.create(socialData);
};

module.exports = {
    findAllSocialSecurity,
    findSocialSecurityById,
    createSocialSecurity
};
