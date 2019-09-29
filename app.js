const app = require('./config/server');

const server = app.listen(8082, ()=>{
    console.log('servidor rodando');
});

const io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection',(socket)=>{

    console.log('conectou');


    socket.on('disconnect', ()=> {

        console.log('desconectou')
    });

    socket.on('msgForServer', (data)=>{
        socket.emit('msgForClient', {
            apelido: data.apelido,
            mensagem: data.mensagem
        });
        
    });
});