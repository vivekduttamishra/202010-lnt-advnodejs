let {isPrimeSync} =require('../../api/lib/prime');
let assert = require('assert');
const { AssertionError } = require('assert');



let result =  isPrimeSync(29);
assert.equal(result, true, '29 should be prime');

let result2=isPrimeSync(21);
assert.equal(result2, false, '21 shouldnt be prime');

let result3=isPrimeSync(2);
assert.equal(result3, false, '2 shouldnt be prime'); //wrong assertion

console.log('all test passed');




