let Sequelize=require('sequelize'); //the main API for Sequelize
let config=require('../sequelize.config');

console.log('sequelize initialized...');

//create the sequelize object with necessary connection information
let sequelize=new Sequelize(config.db,
  config.user,
  config.password,
  config.options);


//attach the Sequelize Object with sequelize context
sequelize.Sequelize=Sequelize; //let my sequelize object contain Sequelize API entry point



module.exports=sequelize;