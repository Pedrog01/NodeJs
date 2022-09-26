let Nedb = require('nedb');
let db = new Nedb({

filename:'users.db',
autoload: true

});


module.exports = (app)=>{


    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json({
            users:[{
                name: 'Pedro Gabriel',
                email: 'pedroxavier@hotmail.com',
                id: 1
            }]
        });
    
    });
    
    
    app.post('/users', (req, res) => {
    
        db.insert(req.body,(err,user)=> {

            if(err){

                console.log('error: ${err}');
                res.statusCode(400).json({
                    error:  err
                });
            }else{

                res.status(200).json(user);
            }

        });
    
    });
    



};
