const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Pruebas = sequelize.define('pruebas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_procedimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'procedimientos',
        key: 'id'
      }
    },
    id_tipo_resultado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_resultado',
        key: 'id'
      }
    },
    codigo_prueba: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    nombre_prueba: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    unidad: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'pruebas',
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
        name: "id_tipo_resultado",
        using: "BTREE",
        fields: [
          { name: "id_tipo_resultado" },
        ]
      },
      {
        name: "id_procedimiento",
        using: "BTREE",
        fields: [
          { name: "id_procedimiento" },
        ]
      },
    ]
  });