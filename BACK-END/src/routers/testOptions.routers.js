const { Router } = require("express");
const testOptionsController = require("../controllers/testOptions.Controller");


const router = Router();

router
    .get('/', testOptionsController.getAllTestOptionsController)
    .get('/:id', testOptionsController.getOneTestOptionsController)
    .post('/', testOptionsController.createTestOptionsController)

module.exports = router;
