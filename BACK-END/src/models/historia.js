const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Historia = sequelize.define('historia', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_persona: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'persona',
      key: 'id'
    }
  },
  id_nivel: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'nivel',
      key: 'id'
    }
  },
  historia: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'historia',
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
      name: "id_persona",
      using: "BTREE",
      fields: [
        { name: "id_persona" },
      ]
    },
    {
      name: "id_nivel",
      using: "BTREE",
      fields: [
        { name: "id_nivel" },
      ]
    },
  ]
});