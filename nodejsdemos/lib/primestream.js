let {fetchPrimes} =require('./primeutils3');
let {Readable} =require('stream');
let util =require('util');

//Redable is weldefined type in stream module
//We are going to create our own type PrintStream which inherits all the function from Readable type

let PrimeStream=function(min=2,max){
    //Javascript Inheritance Step 1 -- chain constructor
    Readable.call(this);  //chain the constructor to the super class

    //user initilazation here
    if(!max){
        max=min;
        min=2;
    }
    this.min=min;
    this.max=max;    

}

//copy the prototype of Redable type to PrintStream type, so that all Readable methods are available to 
//PrintStream
util.inherits(PrimeStream, Readable); //PrintStream gets all methdos defined for Readable



//Easy way to implement the ReadableStream
//Just override an internal method (generally not called by clients) _read() to
//This method is replacing the default _read from the Readable type

PrimeStream.prototype._read =function(){

    let self=this; //generall this will be lost in nested callbacks

    fetchPrimes(this.min,this.max)
        //my api sends 'PRIME', but Readable is supposed send 'data'
        .on('PRIME',data=>{
            //create a buffer from the json data you have
            let buffer= Buffer.from(JSON.stringify(data));
            self.emit('data',buffer);
        })
        .on('FINISHED',(data)=>{
            let buffer=Buffer.from(JSON.stringify(data));
            self.emit('end',buffer);
        })
        .on('ERROR',(error)=>{
            let buffer=Buffer.from(JSON.stringify(error));
            self.emit('error',buffer);
        });


}

module.exports={
    PrimeStream
};



