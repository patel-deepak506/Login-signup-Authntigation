// const Knex = require('mysql');

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'Deepak@20',
      database : 'login_signup'
    }
  });

  module.exports = knex;