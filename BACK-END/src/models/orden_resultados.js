const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = OrdenResultado = sequelize.define('orden_resultados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orden',
        key: 'id'
      }
    },
    id_procedimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'procedimientos',
        key: 'id'
      }
    },
    id_prueba: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pruebas',
        key: 'id'
      }
    },
    id_prueba_opcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pruebas_opciones',
        key: 'id'
      }
    },
    res_opcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    res_numerico: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    res_texto: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    res_memo: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    num_procesamientos: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orden_resultados',
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
        name: "id_prueba",
        using: "BTREE",
        fields: [
          { name: "id_prueba" },
        ]
      },
      {
        name: "id_procedimiento",
        using: "BTREE",
        fields: [
          { name: "id_procedimiento" },
        ]
      },
      {
        name: "id_orden",
        using: "BTREE",
        fields: [
          { name: "id_orden" },
        ]
      },
      {
        name: "id_prueba_opcion",
        using: "BTREE",
        fields: [
          { name: "id_prueba_opcion" },
        ]
      },
    ]
  });