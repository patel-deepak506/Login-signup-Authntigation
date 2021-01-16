// it is for login code..

const Jwt = require('jsonwebtoken');


module.exports = (knex,login)=>{
    login.post('/login',(req,res)=>{
        knex.select("username","password").from("users").where("username",req.body.username)
        .then(data=>{
            console.log(data);
            if(data.length==0){
                res.send("That data is not get from user first go and signup")
            }else if(data[0].password=req.body.password){
                const token =Jwt.sign(req.body.Email_id,req.body.username,req.body.password,"that is secrate_Key")
                res.send(token)
                console.log("secrate_key===",token);
            }else{
                res.send("your username or passwaord in incorrect")
            }
        })
        .catch(err=>{
            console.log(err);
        });
    });
};