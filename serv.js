var http = require('http');
var server = http.createServer().listen(4000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

	socket.on('subscribe', function(data){
		console.log('Node server log: subscribing to room #' + data.room);

		socket.join(data.room);
	});

	socket.on('comment', function(data){
		console.log('Node server log: broadcasting new_comment event to room #' + data.entryId);
		
		socket.broadcast.to(data.entryId).emit('new_comment', data);
	});
});

