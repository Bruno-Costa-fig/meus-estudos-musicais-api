const { DataTypes } = require('sequelize');
const {connection} = require('../db/connection');
const Gem = require('./Gem');

const Aluno = connection.define('Aluno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    gem_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Gem,
            key: 'id'
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Aluno;