require('dotenv').config();
const { connectToDatabase, sequelize } = require('./src/config/database')
const Server = require('./src');
const server = new Server();

const Init = async () => {
    
    try {
        await connectToDatabase();

        server.listen();

    } catch (error) {
        console.log('No se pudo conectar al servidor.', error)
    }
};


Init();