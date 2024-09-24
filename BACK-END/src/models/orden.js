const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Orden = sequelize.define('orden', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_documento',
        key: 'id'
      }
    },
    orden: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_historia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'historia',
        key: 'id'
      }
    },
    id_profesional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'profesional',
        key: 'id'
      }
    },
    profesional_externo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'orden',
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
        name: "id_documento",
        using: "BTREE",
        fields: [
          { name: "id_documento" },
        ]
      },
      {
        name: "id_historia",
        using: "BTREE",
        fields: [
          { name: "id_historia" },
        ]
      },
      {
        name: "id_profesional",
        using: "BTREE",
        fields: [
          { name: "id_profesional" },
        ]
      },
    ]
  });
