var socket = io.connect('http://192.168.0.9:6677' ,{'forceNew':true});
socket.on('messages', function(data){
    console.log(data);
    render(data);

});

function render(data){
    var html = data.map(function(messages, index){
        return (`

            <div class = "message">
            <strong>${messages.nickname}</strong> dice:
            <p>${messages.text}</p>
            </div>

            `);

    }).join('');

}
function addMessage(e){
    var online = {
        nickname: document.querySelector('.nickname').value,
        text: document.querySelector('#mensaje').value
    };
        socket.emit('addMessage', online);
        return false;

};