
let sequelize= require('./sequelize');
let config=require('../sequelize.config');

require('./author');  //automatically injects Author to sequelize

require('./book'); //automatically injects Book to sequelize


//let us see our database

async function seedData(){
    if(config.sync.force){

        await   sequelize.Author.bulkCreate(require('../seeder/authors.json'));
        console.log('data seeded...');
        return true;
    } 
    console.log('data not seeded');
    
}

async function init(){
    await sequelize.sync(config.sync);
    await seedData();
}


init().then(()=>{
    console.log('sequelize connected and ready...');
});

module.exports=sequelize;

