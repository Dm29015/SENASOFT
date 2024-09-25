const { Router } = require("express");
const typeResultsController = require("../controller/typeResults.Controller");


const router = Router();

router
    .get('/', typeResultsController.getAllTypeResultsController)
    .get('/:id', typeResultsController.getOneTypeResultsController)
    .post('/', typeResultsController.createTypeResultsController)

module.exports = router;
