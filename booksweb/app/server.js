let express=require('express');
let app=express()
let bodyParser=require('body-parser');

require('./models/sequelize-bootsrap'); //will initialize sequelize 

const port=process.env.port||3000;

app.use(bodyParser.json());




app.use('/api/authors', require('./routes/authors-route'));


app.listen(port,(err)=>{
    if(!err)
        console.log(`server started on port `+ port);
    else
        console.log(`server failed to start on port `+ port+`:`+err);
});