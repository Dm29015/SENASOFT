const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const router = Router();

router
    .post('/login', authController.loginUser)

module.exports = router;
