const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js API!');
});

server.listen(3000, () => {
  console.log('Node.js API listening on port 3000');
});
