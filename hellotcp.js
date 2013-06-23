var net = require('net');
var sys = require('sys');
net.createServer(function (socket) {
    sys.puts('Connection from ' + socket.remoteAddress);
    socket.end('Hello Node!!!');
}).listen(8080);

console.log('Server started.')