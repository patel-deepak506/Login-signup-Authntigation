const knex = require('../db_connection/sql_knex');

module.exports = (knex,del)=>{
    del.delete('/delete/:Email_id',(req,res)=>{
        knex('users').where({'Email_id':req.params.Email_id}).delete(['password','username','Email_id'])
        .then(resolve=>{
            console.log("data has been deleted successfully .. ");
            res.send("data has been deleted successfully .. ")
        }).catch(err=>{
            console.log(err);
        });
    });
};