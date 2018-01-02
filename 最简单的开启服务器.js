var http = require('http');
var server = http.createServer(function (req,res) {
	res.writeHead(200,{
		'Content-Type':'text/plain'
	});
	res.end('hello world');
});
server.listen(3000,function () {
	console.log('Server running in http://localhost:3000')
});
