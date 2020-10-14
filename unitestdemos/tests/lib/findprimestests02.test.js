let {findPrimesSync} =require('../../api/lib/prime');
let assert = require('assert');
let expect =require('chai').expect;





describe('findprimeSync tests using chai expect', function () {

    //one test case
    it('there should be 4 primes under 10',function(){

        let result=findPrimesSync(1,10);

        expect(result).to.be.an('Array');

    });

    it('there should be 25 primes under 100',function(){

        let result=findPrimesSync(1,100);
        expect(result.length).to.be.greaterThan(24).and.lessThan(26);

    });

    it('there should be 15 primes under 50',()=>{

        expect(findPrimesSync(1,50)).to.be.an('array').with.length(15);

    });

});