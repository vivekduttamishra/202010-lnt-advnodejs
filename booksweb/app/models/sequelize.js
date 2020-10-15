let Sequelize=require('sequelize'); //the main API for Sequelize


console.log('sequelize initialized...');

//create the sequelize object with necessary connection information
let sequelize=new Sequelize('booksdb_lnt',"root","@DM1n.",{
  host:'localhost', 
  dialect: 'mysql'
});

//attach the Sequelize Object with sequelize context
sequelize.Sequelize=Sequelize; //let my sequelize object contain Sequelize API entry point



module.exports=sequelize;