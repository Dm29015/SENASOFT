const { Router } = require("express");
const typeDocumentController = require("../controllers/typeDocument.Controller");


const router = Router();

router
    .get('/', typeDocumentController.getAllTypeDocumentController)
    .get('/:id', typeDocumentController.getOneTypeDocumentController)
    .post('/', typeDocumentController.createTypeDocumentController)

module.exports = router;
