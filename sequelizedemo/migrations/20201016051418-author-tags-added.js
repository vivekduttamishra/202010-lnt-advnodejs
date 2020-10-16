'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    let transaction=await queryInterface.sequelize.transaction();
    try{
      await queryInterface.addColumn('Authors','tags',{
        type:Sequelize.DataTypes.STRING,
        allowNull:true,
        default:'author'
      },{transaction});
      transaction.commit();
    }catch(err){
      transaction.rollback();
    }


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     return queryInterface.sequelize.transaction(async transaction =>{
        
        await queryInterface.removeColumn('Authors','tags',{transaction});

     });
  }
};
