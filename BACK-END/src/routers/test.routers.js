const { Router } = require("express");
const testController = require("../controllers/test.Controller");


const router = Router();

router
    .get('/', testController.getAllTestController)
    .get('/:id', testController.getOneTestController)
    .get('/:idProcedimiento', testController.getTestByProcediment)
    .post('/', testController.createTestController)

module.exports = router;
