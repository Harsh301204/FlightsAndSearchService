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
        name : 'Chhatrapati Shivaji Maharaj International Airport',
        CityId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
        
      },

      {
        name : 'Aurangabad Airport',
        CityId : 10,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        name : 'Shirdi Airport',
        CityId : 10,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        name : 'Nashik International Airport',
        CityId : 10,
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
