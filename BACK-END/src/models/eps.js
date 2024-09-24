const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Eps = sequelize.define('eps', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING(8),
    allowNull: false
  },
  razon_social: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  nit: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'eps',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});