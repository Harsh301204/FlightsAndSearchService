'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airpot, {
        foreignKey: 'CityId'
      })
    }
  }
  city.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }

    ,
    state : { 
      type : DataTypes.STRING,
      allowNull : false,
      defaultValue : 'Punjab'
    }


  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};