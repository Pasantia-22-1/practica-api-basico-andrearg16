const express = require('express');
const cors = require('cors');
const router = require('./rutes/task.rout')

class Serve {
    constructor(port) {
        this.port = port;
        this.api = express();
        this.initRoute();
    }
    initServer() {
        this.api.listen(this.port, () => { console.log('Iniciando servicio'); });
    }
    initRoute() {
        this.api.use('/api/v1', (req, res) => {

        });
    }
}