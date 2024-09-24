const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false
    }
);

const connectToDatabase = async () => {

    try {
        await sequelize.authenticate();
        console.log(`\nConexión establecida a la base de datos "${process.env.DB_NAME}".`);
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }

    return sequelize;
};

module.exports = { sequelize, connectToDatabase };