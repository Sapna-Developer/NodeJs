let http = require('http');
let server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' }); //mimeType
  res.write("<h1>welcome to http server</h1>");
  res.end();
});

server.listen(8080);
console.log("server listening the port number 8080");