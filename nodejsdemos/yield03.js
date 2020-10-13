
let range= function *(min,max) {

    console.log('starting the range...');

    for(let x=min; x<max; x++){
        console.log('yeielding ',x);
        yield x;
    }

    console.log('end of range...');
}
let g= range(0,3); //generates 0,1,2

console.log('g',g); //note range function hasn't executed any code yet.

console.log('reaches first yield',g.next());  //here all codes till first yield execute, but no further

//notice we have not completed loop yet. if we don't call next further, no further calculation will happen.

console.log('reaches second yield',g.next()); //executes code till next yield and then wait for another next call

console.log('reaches last yield',g.next());; //this will encounter our last yield, but program hasn't finished yet.

console.log('reaches the end of code',g.next());; //executes the rest of the code to realize that there is no more yield pending.

console.log('once you are past the last line of the code');

console.log('end of code reached by earlier call, so no action here',g.next());; //no more execution as you already gone past last line of code