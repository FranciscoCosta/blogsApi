const { newCategoryS } = require('../services/Categories.jsx');

const newCategory = async (req, res) => {
    const { name } = req.body;
    const { id } = await newCategoryS(name);
    res.status(201).json({
        name,
        id,
    });
};

module.exports = {
    newCategory,
};