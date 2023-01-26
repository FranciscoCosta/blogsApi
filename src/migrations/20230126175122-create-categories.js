'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const categories = await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    return categories;

  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('categories');

  }
};
