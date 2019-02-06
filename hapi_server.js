//creating a basic server using hapi
'use strict';
const server_hapi = require('hapi');

//create a new hapi server object
const server = server_hapi.server({
    //define the port and hostname for the server
    port: 3000,
    host: 'localhost'
});

//adding a server route
server.route({
    method: 'GET',
    path: '/{product_ID}',
    handler: (request, h) => {

        return 'Walmart Product_ID: ' + encodeURIComponent(request.params.product_ID) ;
    }
});

const init = async () => {
    await server.start();
    console.log(`The server is running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();