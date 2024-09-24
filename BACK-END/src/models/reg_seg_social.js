const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = RegSegSocial = sequelize.define('reg_seg_social', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre_reg_social: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: "nombre_reg_social"
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'reg_seg_social',
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
    {
      name: "nombre_reg_social",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "nombre_reg_social" },
      ]
    },
  ]
});