'use strict';

const {Permission} = require('../../models/rbac/Permission');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Permission.tableName, Permission.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Permission.tableName);
  }
};
