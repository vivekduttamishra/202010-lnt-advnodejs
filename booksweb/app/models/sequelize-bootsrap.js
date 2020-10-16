
let sequelize= require('./sequelize');
let config=require('../sequelize.config');




//manually require each model file so that they
//can be intialized

require('./author');  //automatically injects Author to sequelize

require('./book'); //automatically injects Book to sequelize


//let us see our database

function mapRelationship(){

    //A Book has a single author
    sequelize.Book.belongsTo(sequelize.Author,{
        as:'Author',  //attach an Author property in the Book object
        foreignKey: 'authorId'
    });
    //Author has many books
    sequelize.Author.hasMany(sequelize.Book,{
        as:'Books', //An array of Books by the give author
        foreignKey: 'authorId' //this relationship is bounded by foregign key in Books table
    });

}


async function seedData(){
    if(config.sync.force){

        await   sequelize.Author.bulkCreate(require('../seeder/authors.json'));
        await sequelize.Book.bulkCreate(require('../seeder/books.json'));
        console.log('data seeded...');
        return true;
    } 
    console.log('data not seeded');
    
}

async function init(){
    mapRelationship();

    await sequelize.sync(config.sync);
    await seedData();
}


init().then(()=>{
    console.log('sequelize connected and ready...');
});

module.exports=sequelize;

