
let sequelize= require('./sequelize');

require('./author');  //automatically injects Author to sequelize

require('./book'); //automatically injects Book to sequelize

sequelize.sync({force:true});

module.exports=sequelize;

