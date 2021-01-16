const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname,'views')));
app.set('view engine', 'pug');
app.set('views','./views');

const table = require('./db_connection/table_connection');
const router = require('./index.js');



app.use(router);
app.get('/',(req,res)=>{
    res.render('layout.pug',{title:"Login_signup page"});
})



app.listen(2021,()=>{
    console.log("server is running on the port:2021");
});