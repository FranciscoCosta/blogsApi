const { Category } = require('../models');

const newCategoryS = async (name) => {
    const category = await Category.create({ name }, { fields: ['name'] });
    return { error: null, id: category.null };
};

module.exports = {
    newCategoryS,
};