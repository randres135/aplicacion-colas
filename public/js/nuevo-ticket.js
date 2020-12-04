


var socket = io()

var label =  $('#lblNuevoTicket')

socket.on('connect',function(){
    console.log('Conectado al servidor')
})

socket.on('disconnect',function(){
    console.log('desconectado al servidor')
})

socket.on('estadoActual',function(EstadoActual){
    console.log(EstadoActual)
    label.text(EstadoActual.actual)
})

$('button').on('click',function(){
    console.log('click')
    socket.emit('siguienteTicket',null,function(siguienteTicket){
        label.text(siguienteTicket)
    })
})

