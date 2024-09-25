const { Router } = require("express");
const historyController = require("../controllers/history.controller");


const router = Router();

router
    .get('/', historyController.getAllHistoryController)
    .get('/:id', historyController.getOneHistoryController)
    .post('/', historyController.createHistoryController)

module.exports = router;
