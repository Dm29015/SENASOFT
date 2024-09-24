const { Router } = require("express");
const personController = require("../controller/person.Controller");


const router = Router();

router
    .get('/', personController.getAllPersonController)
    .get('/:id', personController.getOnePersonController)
    .post('/', personController.createPersonController)

module.exports = router;
