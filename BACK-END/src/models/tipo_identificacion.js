const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = TipoIdentificacion = sequelize.define('tipo_identificacion', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  abreviatura: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  nombre_documento: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: "nombre_documento"
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'tipo_identificacion',
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
      name: "nombre_documento",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "nombre_documento" },
      ]
    },
  ]
});