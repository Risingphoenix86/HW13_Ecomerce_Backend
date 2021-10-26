const { Model, DataTypes, INTEGER, STRING } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKry: true,
    autoIncrement: true
    },
    category_name: {
      type: STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
