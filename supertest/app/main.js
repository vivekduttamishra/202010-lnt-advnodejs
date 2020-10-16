let app=require('./app');

let port= process.env.PORT || 3000;

app.listen(port, err => {
    if(!err)
        console.log(`server started on port ${port}`);
    else
        console.log(`server failed to start on port ${port}`);

});