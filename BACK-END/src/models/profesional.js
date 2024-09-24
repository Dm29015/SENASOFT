const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Profesional = sequelize.define('profesional', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_tipo_prof: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'tipo_profesion',
      key: 'id'
    }
  },
  codigo: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  id_persona: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'persona',
      key: 'id'
    }
  },
  registro_medico: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'profesional',
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
      name: "id_tipo_prof",
      using: "BTREE",
      fields: [
        { name: "id_tipo_prof" },
      ]
    },
    {
      name: "id_persona",
      using: "BTREE",
      fields: [
        { name: "id_persona" },
      ]
    },
  ]
});