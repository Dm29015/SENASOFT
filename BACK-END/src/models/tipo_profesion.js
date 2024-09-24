const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = TipoProfesion = sequelize.define('tipo_profesion', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre_profesion: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: "nombre_profesion"
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'tipo_profesion',
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
      name: "nombre_profesion",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "nombre_profesion" },
      ]
    },
  ]
});
