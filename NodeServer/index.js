const http = require('http');

const hostname ="localhost";
const portNumber = 3000;

const server =http.createServer((req ,res)=>{
    console.log(req.headers);
    res.statusCode =200; 
    res.setHeader('Content-Type','text/html');
    res.end(<html><body><h1>server success connection </h1></body></html>)
})

server.listene(portNumber,hostname,()=>{
    console.log(`server running at  http://${hostname}:${portNumber}`)
})