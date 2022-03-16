const Serve = require('./server.js');


function main() {
    const srv = new ServiceWorkerRegistration(3000);
    srv.initServer();
}
main();