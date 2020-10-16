'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Author.init({
    name: DataTypes.STRING,
    biography: {
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        len:[10,2000] //ideally min should be 200
      }
    },
    photograph: DataTypes.STRING,
    //migration-2 --adding a table
    tags:{
      type:DataTypes.STRING,
      default:'author',
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};