
const http = require('http')
const dt = require('./try_module')


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the current date is now :" + dt.myDateTime());
  }).listen(8080); 
  console.log('server is open on port 8080')