const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = TipoDocumento = sequelize.define('tipo_documento', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
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
  tableName: 'tipo_documento',
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