const express  = require('express');
const router = express.Router();
const knex = require('./db_connection/sql_knex');

// Path of delete end point

require('./crud/delete')(knex,router);

// path of sighup end point

require('./crud/signup')(router,knex);

// path of login end point

require('./crud/login')(knex,router);

// path of update data end point

require('./crud/update_data')(knex,router);

// for sending another file 

module.exports = router;