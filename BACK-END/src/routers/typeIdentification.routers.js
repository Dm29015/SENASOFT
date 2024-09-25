const { Router } = require("express");
const typeIdentification = require("../controller/typeIdentification.Controller");


const router = Router();

router
    .get('/', typeIdentification.getAllTypeIdentificationController)
    .get('/:id', typeIdentification.getOneTypeIdentificationController)
    .post('/', typeIdentification.createTypeIdentificationController)

module.exports = router;
