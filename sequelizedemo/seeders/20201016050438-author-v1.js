'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Authors', [

      {
        "name": "Vivek Dutta Mishra",
        "biography": "Author of The Accursed God",
        "photograph": "vivek.jpg",
        "createdAt":new Date(),
        "updatedAt":new Date()
      },

      {
        "name": "Alexandre Dumas",
        "biography": "One of the altime greatest author of English and French",
        "photograph": "dumas.jpg",
        "createdAt":new Date(),
        "updatedAt":new Date()
      },

      {
        "name": "Jeffrey Archer",
        "biography": "Contemporary best seller of English Fictions",
        "photograph": "archer.jpg",
        "createdAt":new Date(),
        "updatedAt":new Date()
      },

      {
        "name": "Ramdhari Singh Dinkar",
        "biography": "National Poet of India",
        "photograph": "dinkar.jpg",
        "createdAt":new Date(),
        "updatedAt":new Date()
      },

      {
        "name": "John Grisham",
        "biography": "Famous author of legal fictions",
        "photograph": "grisham.jpg",
        "createdAt":new Date(),
        "updatedAt":new Date()
      }


    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
