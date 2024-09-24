const { Router } = require("express");
const typeProfessionController = require("../controller/typeProfession.Controller");


const router = Router();

router
    .get('/', typeProfessionController.getAllTypeProfessionController)
    .get('/:id', typeProfessionController.getOneTypeProfessionController)
    .post('/', typeProfessionController.createTypeProfessionController)

module.exports = router;
