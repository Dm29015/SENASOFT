const { Router } = require("express");
const testController = require("../controller/test.Controller");


const router = Router();

router
    .get('/', testController.getAllTestController)
    .get('/:id', testController.getOneTestController)
    .post('/', testController.createTestController)

module.exports = router;
