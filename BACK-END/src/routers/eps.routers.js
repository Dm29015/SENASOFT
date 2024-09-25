const { Router } = require("express");
const epsController = require("../controller/eps.Controller");


const router = Router();

router
    .get('/', epsController.getAllEpsController)
    .get('/:id', epsController.getOneEpsController)
    .post('/', epsController.createEpsController)

module.exports = router;
