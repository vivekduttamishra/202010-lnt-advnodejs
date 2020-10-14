let {findPrimesSync} =require('../../api/lib/prime');
let assert = require('assert');
const { expect } = require('chai');


xdescribe('findprimeSync tests', function () {

    //one test case
    it('there should be 4 primes under 10',function(){

        let result=findPrimesSync(1,10);

        assert.strictEqual(result.length    ,4);

    });

    it('there should be 25 primes under 100',function(){

        let result=findPrimesSync(1,100);
        assert.strictEqual(result.length    ,25);

    });

    it('there should be 15 primes under 50',()=>{

        //expect(findPrimesSync(1,50).length).toBe(15);

        expect(findPrimesSync(1,50).length).to.equal(15);

    });

});