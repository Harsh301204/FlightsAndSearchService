'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airpot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.city , {
        foreignKey : 'CityId',
        onDelete : 'CASCADE'
      })
    }
  }
  Airpot.init({
    name:{type : DataTypes.STRING,
      allowNull : false
    },
    Address: DataTypes.STRING,
    CityId: {type : DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airpot',
  });
  return Airpot;
};