const { Router } = require("express");
const procedimentController = require("../controllers/procedimient.Controller");


const router = Router();

router
    .get('/', procedimentController.getAllProcedimientsController)
    .get('/:id', procedimentController.getOneProcedimientsController)
    .post('/', procedimentController.createProcedimientsController)

module.exports = router;
