const net = require('net');

const server = net.createServer();

server.listen({
    host: 'localhost',
    port: 8080
});

server.on('connection', client => {
    console.log('client connected');
    client.write('Welcome to the server');
    setInterval(() => {
        client.write(new Date().toISOString());
    }, 1000);
})