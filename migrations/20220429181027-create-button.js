'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Buttons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      buttonType: {
        allowNull: false,
        type: Sequelize.STRING(10),
        defaultValue: "WhatsApp"
      },
      config: {
        type: Sequelize.BLOB,
      },
      statusId: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'), 
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: Sequelize.literal('NOW()'),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Buttons');
  }
};