const uc = require('upper-case');

const http = require('http')
const port = 3000;
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("hello wordl"));
    res.end();
}).listen(port);

console.log(`your server is running on port ${port}`)

