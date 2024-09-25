const { Router } = require("express");
const typeProfessionController = require("../controllers/typeProfession.Controller");


const router = Router();

router
    .get('/', typeProfessionController.getAllTypeProfessionController)
    .get('/:id', typeProfessionController.getOneTypeProfessionController)
    .post('/', typeProfessionController.createTypeProfessionController)

module.exports = router;
