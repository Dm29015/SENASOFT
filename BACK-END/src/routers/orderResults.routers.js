const { Router } = require("express");
const orderController = require("../controllers/orderResults.Controller");


const router = Router();

router
    .get('/', orderController.getAllOrderResultsController)
    .get('/:id', orderController.getOneOrderResultsController)
    .get('/orden/:idOrden', orderController.getResultadosByOrden)
    .post('/', orderController.createOrderResultsController)

module.exports = router;
