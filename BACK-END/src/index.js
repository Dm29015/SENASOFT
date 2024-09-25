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
        this.app.use('/auth', require('./routers/auth.routers'))

        this.app.use('/cups', require('./routers/cups.routers'))
        this.app.use('/eps', require('./routers/eps.routers'))
        this.app.use('/grupoLab', require('./routers/grupLab.routers'))
        this.app.use('/historia', require('./routers/history.routers'))
        this.app.use('/nivel', require('./routers/level.routers'))
        this.app.use('/orden', require('./routers/level.routers'))
        this.app.use('/ResultOrden', require('./routers/orderResults.routers'))
        this.app.use('/personas', require('./routers/person.routers'))
        this.app.use('/procedimiento', require('./routers/procediment.routers'))
        this.app.use('/profesion', require('./routers/profession.routers'))
        this.app.use('/social', require('./routers/socialSecurity.routers'))
        this.app.use('/pruebas', require('./routers/test.routers'))
        this.app.use('/opcionesPruba', require('./routers/testOptions.routers'))
        this.app.use('/tipoDoc', require('./routers/typeDocument.routers'))
        this.app.use('/tipoIdent', require('./routers/typeIdentification.routers'))
        this.app.use('/tipoProfesion', require('./routers/typeProfession.routers'))
        this.app.use('/tipoResultado', require('./routers/typreResults.routers'))

    };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`\nhttp://localhost:${this.port}`)
        })
    };
}

module.exports = Server;