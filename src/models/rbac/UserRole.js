const {connection} = require('../../db/connection');
const { INTEGER, DATE } = require('sequelize');

const UserRole = connection.define("UsersRole", {
    roleId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'roles'
            },
            key: 'id'
        },
        allowNull: false
    },
    usuario_id: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'Usuarios'
            },
            key: 'id'
        },
        allowNull: false
    },
    createdAt:DATE,
    updatedAt:DATE
},{ underscored: true, paranoid: true })

module.exports = { UserRole }