let express=require('express');
let app=express()
let bodyParser=require('body-parser');

const port=process.env.port||3000;

app.use(bodyParser.json());


let Sequelize=require('sequelize');

let sequelize=new Sequelize('booksdb_lnt',"root","@DM1n.",{
  host:'localhost', 
  dialect: 'mysql'
});

//Create an Author Model type using Sequelize
let Author=sequelize.define('Author',{
    name: Sequelize.STRING,   //varchar(255)
    biography:Sequelize.TEXT, //large string
    photograph: Sequelize.STRING,
    tags:Sequelize.STRING
});

//let us sync this detail with the database

sequelize.sync({force:true}); //automatically authenticates

//sequelize.authenticate();



app.use('/api/authors', require('./routes/authors-route'));


app.listen(port,(err)=>{
    if(!err)
        console.log(`server started on port `+ port);
    else
        console.log(`server failed to start on port `+ port+`:`+err);
});