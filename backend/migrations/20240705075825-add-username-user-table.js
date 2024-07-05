'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn("Users", "username", {
     type: Sequelize.STRING,
     allowNull: false,
     after: "email",
     validate: {
       notEmpty: true,
       notNull: true,
       len: [3, 20],
     },
     defaultValue: "",
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
