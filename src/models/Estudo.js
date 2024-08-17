const { DataTypes } = require('sequelize');
const {connection} = require('../db/connection');
const Aluno = require('./Aluno');
const Professor = require('./Professor');
const TypeEstudo = require('./TypeEstudo');

const Estudo = connection.define('estudos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  aluno_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  professor_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  finishedAt: {
    type: DataTypes.DATE
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

Estudo.belongsTo(Aluno, { foreignKey: 'aluno_id' });
Estudo.belongsTo(Professor, { foreignKey: 'professor_id' });
Estudo.belongsTo(TypeEstudo, { foreignKey: 'type_id' });

module.exports = Estudo;