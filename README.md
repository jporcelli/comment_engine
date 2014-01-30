comment_engine
==============

Real time comment engine. Using socket.io implementing web socket protocol or fallback to Comet running on node.js to push new comments to connected clients viewing the same document.

When using comment_engine in conjuction with another application (typical case) you should run the node.js server on a seperate port from the port you're application wev server is running on (:80).

client
=====
Include the <script src="host:port/socket.io/socket.io.js, just as described on socket.io.

Next include you're documents script which should typically define a function such as,
function comment(){
//retrieve comment text
//validate the comment
//PUT to you're application server or where ever you're store is running to //persist the new comment from the client

var payload = {text: commentText, commentContext: .., author: ..};
global_sock.emit('comment', payload); 
};

Modify comment_engine.js
=====================
Typically a comment is associated with a room, or in general lets call it a context. Obtain this context identifier and modify line 22,

socket.emit('subscribe', {room: CONTEXT_ID});

this will associate each client that connects to the server with the context with which they are currently associated. i.e viewing a certain blog entry, article, etc.
Each context should be a distinct document so any clients viewing the same document will therefore be associated 'subscribed' to the same room and will receive real time comment updates made by other clients, and other clients will see their comments in real time.

TRY IT
=====
Pull out two browsers and navigate to you're app to give it a try.

There's some other stuff specific to my app that you will probably want to modify.I know its not in perfect form for you to plug in to you're app so I will be pushing some commits which generalize this app soon. 

Thanks James.

