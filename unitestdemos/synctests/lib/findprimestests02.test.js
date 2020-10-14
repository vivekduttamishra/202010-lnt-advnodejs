let {findPrimesSync} =require('../../api/lib/prime');
let assert = require('assert');
let expect =require('chai').expect;





xdescribe('findprimeSync tests using chai expect', function () {

    //one test case
    xit('there should be 4 primes under 10',function(){

        let result=findPrimesSync(1,10);
        
        expect(result).is.an('Array').and.include.ordered.members([2,3,5,7]);

    });

    it('there should be 25 primes under 100',function(){

        let result=findPrimesSync(1,100);
        expect(result.length).to.be.greaterThan(24).and.lessThan(26);

    });

    it('there should be 15 primes under 50',()=>{

        expect(findPrimesSync(1,50)).to.be.an('array').with.length(15);

    });

});