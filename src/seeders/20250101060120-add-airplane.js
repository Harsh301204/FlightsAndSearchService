'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        ModelNumber: 'Boeing 777',
        Capacity: 300,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        ModelNumber: 'Airbus A320',
        Capacity: 350,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        ModelNumber: 'Airbus A330',
        Capacity: 420,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        ModelNumber: 'Boeing 737',
        Capacity: 270,
        createdAt : new Date(),
        updatedAt : new Date()
      },

      {
        ModelNumber: 'Boeing 757',
        Capacity : 225,               
        createdAt : new Date(),
        updatedAt : new Date()
      }



    ], {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
