const { check, validationResult } = require('express-validator');



module.exports = (application)=>{
    
    application.post('/chat',[check('apelido', 'apelido n pode ser vazio').not().isEmpty()] ,(req,res)=>{
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
                
            
            return res.status(422).json({ errors: errors.array() });
        }
        
        application.app.controllers.chat.startChat(application, req,res);
        
    });

    application.get('/chat', (req,res)=>{
        application.app.controllers.chat.startChat(application, req,res);
    });

    
}