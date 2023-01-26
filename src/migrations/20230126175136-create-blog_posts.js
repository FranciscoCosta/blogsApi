'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const blog_posts = await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });

    return blogPosts;
  },

  down: async (queryInterface, _Sequelize) => {
      
      await queryInterface.dropTable('blog_posts');
  }
};
