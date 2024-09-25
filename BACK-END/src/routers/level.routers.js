const { Router } = require("express");
const levelController = require("../controller/level.Controller");


const router = Router();

router
    .get('/', levelController.getAllLevelController)
    .get('/:id', levelController.getAllLevelController)
    .post('/', levelController.createLevelController)

module.exports = router;
