let express =require('express');
let bodyParser = require('body-parser');


let app=express();

app.use(bodyParser.json());

app.use('/api/primes', require('./primes-route'));

module.exports=app;

