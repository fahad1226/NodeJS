// const url = require('url')

// const adr = 'http://localhost:8080/fahad.html?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host)
// console.log(q.pathname)
// console.log(q.search)

// const obj = q.query;

// console.log(obj)
// console.log(obj.month)
// console.log(obj.year)

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 page not found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 
console.log('your server is running on port 8080')