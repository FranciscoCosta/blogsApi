'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
        },
    });
    return Users;
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('users');

  }
};
