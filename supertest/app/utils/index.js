
let delay=(time)=>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(),time);
    });
}


let same = (str1,str2)=>{
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();

    return str1==str2;    
}

let contains=(str1,str2)=>{
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    return str1.indexOf(str2)>=0;
}

function greet(name){
    var now=new Date();

    let str=now.toLocaleDateString();
    return `Hello ${name}, today is ${str}`;

}

module.exports={
    delay,same,contains,greet
};