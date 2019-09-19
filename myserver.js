var http = require('http');

http.createServer(function(request, response){
        response.writeHead(500,{'Content-Type':'text/html'});
        response.end('<h1>This is Localserver using Node.js</h1>');

}).listen(3000);
console.log('running server on port no 3000');

