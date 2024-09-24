const { Router } = require("express");
const cupsController = require("../controller/cups.Controller");


const router = Router();

router
    .get('/', cupsController.getAllCupsController)
    .get('/:id', cupsController.getOneCupsController)
    .post('/', cupsController.createCupsController)

module.exports = router;
