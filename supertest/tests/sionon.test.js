let {greet} =require('../app/utils');
let should=require('chai').should();
let sinon =require('sinon');

describe('test greeter', function(){

    it('greeter should include date and name', function(){
        let name='Vivek';
        let date=new Date('Januaury 1, 2020'); 
        //console.log(date.toLocaleDateString('en-US')); 
        let clock=sinon.useFakeTimers(date);
         
        greet(name)
                .should.contain(name)
                .and.contain('1/1/2020')
                ;
    })

});