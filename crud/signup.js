// const express = require('express');
// const knex = require('../db_connection/sql_knex');
// const app = express();

module.exports = (signup,knex)=>{
    signup.post('/sign',(req,res)=>{
        // const {username,Email_id,password } = req.body;
        knex.select().from("users")
        .then(data=>{
            knex("users").insert({username:req.body.username,Email_id:req.body.Email_id,password:req.body.password})
            
            .then(data=>{
                console.log(data.RowDataPacket);
                res.send("user has been successfully sign")
            })
            .catch(err=>{
                console.log(err);
                res.send("in your code error")
            })
 
        }).catch(err=>{
            console.log(err);
        });
    

    });
}