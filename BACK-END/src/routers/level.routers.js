const { Router } = require("express");
const levelController = require("../controllers/level.Controller");


const router = Router();

router
    .get('/', levelController.getAllLevelController)
    .get('/:id', levelController.getAllLevelController)
    .post('/', levelController.createLevelController)

module.exports = router;
