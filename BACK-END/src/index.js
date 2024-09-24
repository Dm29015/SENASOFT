const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routers();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    };

    routers(){
        // this.app.use('/pacientes', require(''))
    };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`\nhttp://localhost:${this.port}`)
        })
    };
}

module.exports = Server;