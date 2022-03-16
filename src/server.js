const express = require('express');
const cors = require('cors');

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
        this.api.use('/home', (req, res) => {
            res.json({ message: 'Hello World' })
        });
    }
}