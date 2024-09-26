const { Router } = require("express");
const grupLabController = require("../controllers/grupLab.Controller");


const router = Router();

router
    .get('/', grupLabController.getAllGrupLabController)
    .get('/:id', grupLabController.getOneGrupLabController)
    .get('/orden/:idOrden', grupLabController.getGruposByOrden)
    .post('/', grupLabController.createGrupLabController)

module.exports = router;
