const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Cups = sequelize.define('cups', {
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
  nombre: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'cups',
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