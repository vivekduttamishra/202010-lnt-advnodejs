
let {primeRange} =require('./lib/primeutils3');

//what if I need array of primes
//... spreads any iterator/generator as individual which are collected in a list
let primeList= [ ... primeRange(2,100)]; 

console.log(primeList);