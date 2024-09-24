const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = Persona = sequelize.define('persona', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_doc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_identificacion',
        key: 'id'
      }
    },
    numero_documento: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "numero_documento"
    },
    apellido1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    apellido2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombre1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombre2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sexo_biologico: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tel_movil: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persona',
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
        name: "numero_documento",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero_documento" },
        ]
      },
      {
        name: "id_tipo_doc",
        using: "BTREE",
        fields: [
          { name: "id_tipo_doc" },
        ]
      },
    ]
  });