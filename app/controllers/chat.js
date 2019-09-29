module.exports.startChat = (application, req, res)=>{

    let dadosForm = req.body;
    res.render('chat');
    console.log(dadosForm);



    
    application.get('io').emit('msgForClient', {apelido: dadosForm.apelido, mensagem: ' acabou de entrar!'});
}