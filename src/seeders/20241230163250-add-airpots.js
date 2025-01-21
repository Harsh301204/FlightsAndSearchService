'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('airpots' , [
      {
        name : 'Shaheed Bhagat Singh International Airport',
        CityId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
        
      },

      {
        name : 'Netaji Subhas Chandra Bose International Airport ',
        CityId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        name : 'Bagdogra International Airport',
        CityId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        name : 'Indira Gandhi International Airport',
        CityId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        name : 'Birsa Munda Airport',
        CityId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      }
     ] , {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
