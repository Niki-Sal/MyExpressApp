'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nutrition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.nutrition.belongsTo(models.fish)
    }
  };
  nutrition.init({
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    fishId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'nutrition',
  });
  return nutrition;
};