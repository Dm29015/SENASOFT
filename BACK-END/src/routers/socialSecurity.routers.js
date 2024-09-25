const { Router } = require("express");
const socialSecurityController = require("../controllers/socialSecurity.Controller");


const router = Router();

router
    .get('/', socialSecurityController.getAllSocialSecurityController)
    .get('/:id', socialSecurityController.getOneSocialSecurityController)
    .post('/', socialSecurityController.createSocialSecurityController)

module.exports = router;
