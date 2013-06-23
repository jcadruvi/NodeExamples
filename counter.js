var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    console.log('New connection');
    userCount++;

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello Node!!!\n');
    response.write('User visits = ' + userCount.toString());
    response.end();
}).listen(8080);

console.log('Server started.')