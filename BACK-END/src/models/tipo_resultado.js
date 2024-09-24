const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = TipoResultado = sequelize.define('tipo_resultado', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre_resultado: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: "nombre_resultado"
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'tipo_resultado',
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
      name: "nombre_resultado",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "nombre_resultado" },
      ]
    },
  ]
});