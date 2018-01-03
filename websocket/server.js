var WebSocketServer = require('ws').Server;

console.log('WebSocket Service running...');
// 启动了一个监听 8181 端口的 websocket 服务 -> ws://localhost:8181
wss = new WebSocketServer({
	port: 8181
});
wss.on('connection', function(ws) {
	console.log('client connected');
	ws.on('message', function(message) {
		console.log(message);
	});
});