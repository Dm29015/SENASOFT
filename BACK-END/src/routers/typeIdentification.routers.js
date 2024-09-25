const { Router } = require("express");
const typeIdentification = require("../controllers/typeIdentification.Controller");


const router = Router();

router
    .get('/', typeIdentification.getAllTypeIdentificationController)
    .get('/:id', typeIdentification.getOneTypeIdentificationController)
    .post('/', typeIdentification.createTypeIdentificationController)

module.exports = router;
