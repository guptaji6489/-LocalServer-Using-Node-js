var http = require('http');

http.createServer(function(request, response){
        response.writeHead(500,{'Content-Type':'text/html'});
        response.end('<h1>Welcome to Hello World Localserver using Node.js</h1>');

}).listen(5244);
console.log('running server on port no 5244');

