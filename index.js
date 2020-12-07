const http = require('http');
const hostName = 'localhost';
const port = 4000;
const server =http.createServer((req,res) => {
   console.log(req.headers);
   res.statusCode =200 ; 
   res.setHeader('Content-Type','text/html');
   res.end('<html><title>server</title><body><h1>server connection successful </h1></body></html>')
});
server.listen(port,hostName)