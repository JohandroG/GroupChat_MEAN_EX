console.log("Server On (Now)");

let socket = io("http://localhost:8080");

let username = prompt("Introduce your name:");

$('.chatForm').on('submit', function(event){
    event.preventDefault();
    let message = $('#message').val();
    
    let info={
        name: username,
        message: message,
    };

    socket.emit('information', info);
});


socket.on('display', function(info){
    let message = `<p>${info.name} :  ${info.message}</p>`;
    $('.messages' ).append(message);
});


