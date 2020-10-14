let {Transform} =require('stream');
let util =require('util');


let Converter=function(convertFunction){

    //Fixed Step 1:chain the constructor 
    Transform.call(this); 
    this.convertFunction=convertFunction; //this function will actually be used over the stream
}


//Fixed Step 2: inherits
util.inherits(Converter, Transform);

//Fixed Step 3: overwrite the required method

Converter.prototype._transform = function(chunk, enc, cb){

    let original=chunk.toString() ; //convert buffer into data

    let covertedValue= this.convertFunction(original); //covert input data to desired type

    let outputBuffer= Buffer.from(covertedValue.toString()); //create a new buffer

    this.push(outputBuffer); //send it to the client

    cb(); //inform the system that convert is complete
};


module.exports={
    Converter
};
