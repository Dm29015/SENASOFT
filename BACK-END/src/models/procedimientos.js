const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Procedimientos = sequelize.define('procedimientos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cups: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cups',
        key: 'id'
      }
    },
    id_grupo_lab: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'grupo_lab',
        key: 'id'
      }
    },
    metodo: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'procedimientos',
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
        name: "id_cups",
        using: "BTREE",
        fields: [
          { name: "id_cups" },
        ]
      },
      {
        name: "id_grupo_lab",
        using: "BTREE",
        fields: [
          { name: "id_grupo_lab" },
        ]
      },
    ]
  });