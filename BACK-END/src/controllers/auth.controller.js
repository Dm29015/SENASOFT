const authService = require('../services/auth.service');

const loginUser = async (req, res) => {
    try {
        const { tipoDocumento, numeroDocumento, fechaNacimiento } = req.body;

        const result = await authService.loginUser(tipoDocumento, numeroDocumento, fechaNacimiento);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión.", error: error.message });
    }
};

const logoutUser = (req, res) => {
    res.status(200).json({ message: "Sesión cerrada exitosamente" });
};

module.exports = {
    loginUser,
    logoutUser,
};