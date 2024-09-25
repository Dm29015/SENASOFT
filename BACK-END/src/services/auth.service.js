const axios = require('axios');
const jwt = require("jsonwebtoken");
const personRepository = require('../repositories/person.repository');
const typeDocRepository = require('../repositories/typeIdentification.repository')

const SECRET_KEY = process.env.SECRET_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;


const verifyRecaptcha = async (recaptchaToken) => {
  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
    const response = await axios.post(url);
    console.log('Respuesta de reCAPTCHA:', response.data);

    return response.data.success;
  } catch (error) {
    console.error('Error verificando reCAPTCHA:', error);
    throw new Error("Error verificando reCAPTCHA");
  }
};


const loginUser = async (typeDocument, numberDocument, dateBirth, recaptchaToken) => {

  const isCaptchaValid = await verifyRecaptcha(recaptchaToken);


  if (!isCaptchaValid) {
    throw new Error("reCAPTCHA inválido");
  }

  const user = await personRepository.findPersonByDocument(numberDocument);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const typeDoc = await typeDocRepository.findTypeIdentificationById(typeDocument);

  console.log(typeDoc)
  if (user.id_tipo_doc != typeDoc.id || user.fecha_nacimiento != dateBirth) {

    throw new Error("Información incorrecta");
  }

  const token = jwt.sign(
    {
      idUser: user.id,
      name: user.nombre1,
      email: user.email,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  return {
    success: true,
    message: "Inicio de sesión exitoso",
    token,
    user
  };
};

module.exports = {
  loginUser,
};