const { DataTypes } = require('sequelize');
const {connection} = require('../db/connection');

const Gem = connection.define('Gem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    logradouro: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    complemento: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    num_alunos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    admin_id: {
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
    }
});

module.exports = Gem;