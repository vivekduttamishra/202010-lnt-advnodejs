let {findPrimesSync} =require('../../api/lib/prime');
let assert = require('assert');
let expect =require('chai').expect;
let should=require('chai').should();






describe('findprimeSync tests using chai should', function () {


    it('there should be 4 prime under 10',()=>{
        findPrimesSync(1,10).should.be.a('array').that.has.members([2,3,5,7]);
    });

    it('should throw exception for bad range',()=>{

        let min=10;
        let max=1;

        expect(()=>findPrimesSync(min,max))
                .to
                .throw(/Invalid Range/)
                .with.property('message','Invalid Range');
  
 
    });


});