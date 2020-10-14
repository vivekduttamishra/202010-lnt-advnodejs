let {isPrimeSync} =require('../../api/lib/prime');
let assert = require('assert');


xdescribe('isPrimeSync tests using simple assert', function () {

    //one test case
    it('isPrimeSync should return true for 11',function(){

        let result= isPrimeSync(11);

        assert.strictEqual(result,true);

    });

    it('isPrimeSync should return false for negative numbers',function(){

        assert.strictEqual(isPrimeSync(-10),false);

        assert.strictEqual(isPrimeSync(-11), false);

    });

});