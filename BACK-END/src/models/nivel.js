const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Nivel = sequelize.define('nivel', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_eps: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nivel: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  id_regimen: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'reg_seg_social',
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'nivel',
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
      name: "id_regimen",
      using: "BTREE",
      fields: [
        { name: "id_regimen" },
      ]
    },
  ]
});
