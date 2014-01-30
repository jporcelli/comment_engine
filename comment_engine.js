/**
 * Comment engine client for node.js/socket.io/redis
 * enabled comment engine server for real time comment
 * updates for clients.
 *
 * @author james porcelli
 */

var global_sock;

function comment_engineOnReady() {

	var entryContainer = document.getElementById('BlogEntry');
	var entryId = entryContainer.getAttribute('data-entryID');

	var socket = io.connect('localhost', {
		port : 4000
	});
	
	global_sock = socket;

	socket.on('connect', function() {
		console.log('Log:Info: comment engine client connected to comment engine server');

		socket.emit('subscribe', {room:entryId});
	});

	socket.on('new_comment', function(comment) {
		console.log('Log:Info: posting new comment on reciept of socket broadcast message');
		
		var comment = new Comment(comment.author, comment.text);

		var commentList = document.getElementById('CommentListUl');

		comment.addToList(commentList);
	});
}


$(document).ready(comment_engineOnReady);
