const { Router } = require("express");
const orderController = require("../controllers/orderResults.Controller");


const router = Router();

router
    .get('/', orderController.getAllOrderResultsController)
    .get('/:id', orderController.getOneOrderResultsController)
    .post('/', orderController.createOrderResultsController)

module.exports = router;
