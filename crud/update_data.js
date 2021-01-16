// const knex = require('./db_connection/sql_knex');
// const knex = require('../db_connection/sql_knex');


module.exports = (knex,update)=>{
    update.put('/update/:username',(req,res)=>{
        knex.select('Email_id','password').from('users').where('username',req.params.username).then(data=>{
            console.log( "sdklghsoi",data);
            if(data.length!=0){
                if (data[0].password ==req.body.main_password){
                    knex('users').update({'Email_id':req.body.Email_id,'password':req.body.password})
                    .where('username',req.params.username)
                    .then(data=>{
                        console.log("   your data has been successfully updated ////chill");
                        res.send("your data has been successfully updated ////chill")
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                }else{
                    console.log("your password id unvalid cheak again");
                    res.send("your password id unvalid cheak again")
                };
            }
            else{
                console.log("Your Email_id or password is wrong");
                res.send("Your Email_id or password is wrong")
            };
        })
        .catch(err=>{
            console.log(err);
            res.send( "  you are doing mistake in code search bug")
        });
    });
};