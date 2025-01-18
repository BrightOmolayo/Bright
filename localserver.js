// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer(function (req, res) {
  // eslint-disable-next-line n/no-deprecated-api
  const q = url.parse(req.url, true)
  const filename = '.' + q.pathname
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      return res.end('404 Not Found bye bye')
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
}).listen(8080)
