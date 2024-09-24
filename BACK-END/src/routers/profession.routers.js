const { Router } = require("express");
const professionController = require("../controller/profession.Controller");


const router = Router();

router
    .get('/', professionController.getAllProfessionController)
    .get('/:id', professionController.getOneProfessionController)
    .post('/', professionController.createProfessionController)

module.exports = router;
