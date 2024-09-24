const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pruebas_opciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_prueba: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pruebas',
        key: 'id'
      }
    },
    opcion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    valor_ref_min_f: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    valor_ref_max_f: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    valor_ref_min_m: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    valor_ref_max_m: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pruebas_opciones',
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
    ]
  });
};
