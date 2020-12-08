const path = require('path');
const http = require('http');
const hostName = 'localhost';
const portNumber = 4000;

const server = http.createServer((request,response) =>{
  response.statusCode = 200;
  response.setHeader('Content-Type','text/html');
  response.end('<html><title>server</title><body><h1>Server connection successful </h1></body></html>')
})

server.listen(portNumber,hostName)