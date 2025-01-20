'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cities', {
      id: {
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
        // defaultValue : "Haryana"
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
    await queryInterface.addColumn('cities' , 'state' , {
      type : Sequelize.STRING,
      allowNull : false,
      defaultValue: "Punjab"
    })  
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cities');
  }
};