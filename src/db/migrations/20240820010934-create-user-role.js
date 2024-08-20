'use strict';

const{UserRole} = require("../../models/rbac/UserRole.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(UserRole.tableName, UserRole.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(UserRole.tableName);
  }
};
