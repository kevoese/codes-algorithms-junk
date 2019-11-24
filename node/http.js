const http = require('http');

const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html'});
  // res.end(`<h1>Hello server ${req.url.slice(1)} </h1>`)
  if (req.url == '/') {
    res.write('Hello server');
    res.end();
  }
  if (req.url == '/getdata') {
    res.write('this your data info');
    res.end();
  }
});

// const server = http.createServer();

// server.on('connection', socket => {
//     console.log('connected');
// });

server.listen(8080, 'localhost');

server.on('listening', () => {
  console.log('server is listening at 8080...');
});
