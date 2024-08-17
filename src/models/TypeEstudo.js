const { DataTypes } = require('sequelize');
const {connection} = require('../db/connection');

const TypeEstudo = connection.define('TypeEstudo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = TypeEstudo;