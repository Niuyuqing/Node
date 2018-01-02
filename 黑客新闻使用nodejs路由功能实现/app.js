var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function (req,res) {
	var url = req.url;
	if (url === '/') {
		res.writeHead(200,{
			'Content-Type':'text/html'
		});
		fs.readFile('./views/index.html','utf-8',function (err,data) {
			if (err) {
				res.writeHead(404);
				res.end();
			}
			res.end(data);
		});
	} else if(url.startsWith('/static')){
		var staticFilePath = '.' + url;
		fs.readFile(staticFilePath,function (err,data) {
			if (err) {
				res.writeHead(404);
				res.end();
			}
			res.end(data);
		});
	} else if(url === '/submit'){
		res.writeHead(200,{
			'Content-Type':'text/html'
		});
		fs.readFile('./views/submit.html','utf-8',function (err,data) {
			if (err) {
				res.writeHead(404);
				res.end();
			}
			res.end(data);
		});
	} else if(url === '/favicon.ico'){
		fs.readFile('./static/img/favicon.ico',function (err,data) {
			if (err) {
				res.writeHead(404);
				res.end();
			}
			res.end(data);
		});
	}else{
		res.writeHead(404);
		res.end('404 Not Found.');
	}
});
server.listen(3000,function () {
	console.log('Server is running at port 3000');
});
