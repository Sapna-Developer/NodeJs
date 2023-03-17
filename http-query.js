let http = require('http');
let url = require('url');

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let obj = url.parse(req.url, true).query;
  if (obj.uname === "sapna" && obj.upwd === "edew3") {
    res.write("<h1>Login successfully</h1>");
  }
  else {
    res.write("<h2>Login Fail</h2>")
  }
  res.end();
});

server.listen(8080);
console.log("server listening the port number 8080");