'use strict';

const {PermissionRole} = require('../../models/rbac/PermissionRole');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PermissionRole.tableName, PermissionRole.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PermissionRole.tableName);
  }
};
