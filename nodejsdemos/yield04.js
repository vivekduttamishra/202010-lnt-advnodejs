
let range= function *(min,max) {

    console.log('starting the range...');

    for(let x=min; x<max; x++){
        console.log('yeielding ',x);
        let clientToken=yield x;
        if(clientToken && clientToken.kill)
            break;
        
    }
    console.log('end of range...');
}

let gen=range(1,15);
let x=gen.next();
while(!x.done){
    console.log(x.value);
    if(x.value==5){
        gen.next({kill:true});
        break;
    }
    x=gen.next();
}

