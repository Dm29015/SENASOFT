const jwt = require("jsonwebtoken");
const personRepository = require('../repositories/person.repository');
const typeDocRepository = require('../repositories/typeIdentification.repository')

const SECRET_KEY = process.env.SECRET_KEY;

const loginUser = async (typeDocument, numberDocument, dateBirth) => {

  const user = await personRepository.findPersonByDocument(numberDocument);
  
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

   const typeDoc = await typeDocRepository.findTypeIdentificationById(typeDocument);

   if (user.id_tipo_doc != typeDoc.id || user.fecha_nacimiento != dateBirth){
    


    throw new Error(`Información incorrecta.", '\nTabla document: ', ${typeDoc.id}, '\nTabla personas: ', ${user.id_tipo_doc} `);
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