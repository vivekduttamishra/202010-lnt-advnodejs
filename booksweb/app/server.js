let express=require('express');
let app=express()
let bodyParser=require('body-parser');

//read .env file and get the necessary details
require('dotenv').config(); 

//no need to cache return of this require
//this is to trigger sequelize initilization for our app
require('./models/sequelize-bootsrap'); //will initialize sequelize 

const port=process.env.port||3000;

app.use(bodyParser.json());




app.use('/api/authors', require('./routes/authors-route'));
app.use('/api/books', require('./routes/books-route'));


app.listen(port,(err)=>{
    if(!err)
        console.log(`server started on port `+ port);
    else
        console.log(`server failed to start on port `+ port+`:`+err);
});