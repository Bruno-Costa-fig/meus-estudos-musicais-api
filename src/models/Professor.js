const { DataTypes } = require('sequelize');
const {connection} = require('../db/connection');// Assuming you have a database configuration file
const { Usuarios } = require('./Usuarios');
const Gem = require('./Gem');

const Professor = connection.define('Professor', {
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
        allowNull: false
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
    }
});

// Define associations if needed
Professor.belongsTo(Usuarios, { foreignKey: 'usuario_id' });
Professor.belongsTo(Gem, { foreignKey: 'gem_id' });

module.exports = Professor;

