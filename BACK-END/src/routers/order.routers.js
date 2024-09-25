const { Router } = require("express");
const orderController = require("../controller/order.Controller");


const router = Router();

router
    .get('/', orderController.getAllOrderController)
    .get('/:id', orderController.getOneOrderController)
    .post('/', orderController.createOrderController)

module.exports = router;
