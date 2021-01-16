const knex = require('./sql_knex');

module.exports = knex.schema.hasTable('users').then(exites=>{
    if (!exites){
        knex.schema.createTable('users',(table)=>{
            table.string('username').notNullable();
            table.string('Email_id').notNullable();
            table.string('password').defaultTo("deepak");
        })
        .then(data=>{
            console.log("your table are connect successfully..");
        })
        .catch(err=>{
            console.log(err);
        });
    };
});