var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

var messages=[{
    id:1,
    text: 'chat privado',
    nickname: "chimbu"

}];

io.on('connection', function(socket){
    console.log('el cliente se ha conectado desde la ip '+socket.handshake.address+' con exito');
    socket.emit('messages', messages)
 
    socket.on("addMessage", function(data){
    messages.push(data);

    io.sockets.emit('messages', messages);
   });
});

app.get('/hola-mundo', function(req, res){
    res.status(200).send('working');

});



server.listen(6677, function(){
    console.log('Servidor funcionando correctamente en http://localhost:6677');
});


