let expect=require('chai').expect;

//should adds test capablites to Object prototype directly
let should=require('chai').should(); //you are calling a function here


xdescribe('simple string tests using chai expect and shoudl',function(){

    let sentence='India is my country.';

    it('is expected to contain India in the begining',function(){

        expect(sentence).to.contain('India').and.has.length.greaterThan(10);

    }); 

    it('should have length greater than 10 and contains India',()=>{

        sentence.should.contain('India').and.has.length.greaterThan(10);

    });

    it('array should contain 3 but not 7',()=>{

        [2,3,4,9].should.be.an('array').that.contains(3).but.not.contains(7);

    });


})