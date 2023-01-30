const { BlogPost, Category, User } = require('../models');

const getAllPostS = async () => {
  const results = await BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  console.log(results, 'AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
  return results;
};

module.exports = {
    getAllPostS,
};