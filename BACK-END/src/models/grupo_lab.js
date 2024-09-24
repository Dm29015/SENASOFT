const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

module.exports = GrupoLab = sequelize.define('grupo_lab', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'grupo_lab',
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
  ]
});
