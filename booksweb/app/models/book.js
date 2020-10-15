
let sequelize=require('./sequelize'); //get the our sequelize context

let Sequelize=sequelize.Sequelize;  //get Squelize api from 


//create a definition of Book and attach this definition to my context
//the attachment is not required by Sequelize api, 
//But will be helpful when I want to use the Author object at other places in my code

sequelize.Book=sequelize.define('Book',{
    title: Sequelize.STRING,   //varchar(255)
    description:Sequelize.TEXT, //large string
    cover: Sequelize.STRING,
    tags:Sequelize.STRING,
    price:Sequelize.INTEGER
});



//otherwise you need to export Book object from this module
//and clients will require to import this module along with sequelize module



