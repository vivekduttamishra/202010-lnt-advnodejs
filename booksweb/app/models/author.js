//let Sequelize=require('sequelize');


let sequelize= require('./sequelize');



sequelize.Author=sequelize.define('Author',{
    name: sequelize.Sequelize.STRING,   //varchar(255)
    biography:sequelize.Sequelize.TEXT, //large string
    photograph: sequelize.Sequelize.STRING,
    tags:sequelize.Sequelize.STRING
});
 

//module.exports=Author;

