'use strict';

const { Role } = require('../../models/rbac/Role');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Role.tableName, Role.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Role.tableName);
  }
};
