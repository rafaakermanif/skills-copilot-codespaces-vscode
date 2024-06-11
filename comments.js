// Create web server
// Create a server that listens on port 8080 and serves the comment.js file.

var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));