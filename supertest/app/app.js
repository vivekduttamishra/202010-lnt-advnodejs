let express =require('express');
let bodyParser=require('body-parser');

let app=express();

app.use(bodyParser.json());

app.use('/api/books', require('./routes/books-route'));


module.exports=app;