
let sequelize= require('./sequelize');
let config=require('../sequelize.config');

require('./author');  //automatically injects Author to sequelize

require('./book'); //automatically injects Book to sequelize

sequelize.sync(config.sync);

module.exports=sequelize;

