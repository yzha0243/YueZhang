var express = require('express');
var app = express();

var router = require('./router.js');
app.use('/',router);
//npm install -g nodeman

app.listen('8080',()=>{
    console.log('server started..');
})