const { newCategoryS, findAllCategoryS } = require('../services/Categories.jsx');

const newCategory = async (req, res) => {
    const { name } = req.body;
    const { id } = await newCategoryS(name);
    res.status(201).json({
        name,
        id,
    });
};

const findAllCategory = async (_req, res) => {
    const result = await findAllCategoryS();
    return res.status(200).json(result);
};

module.exports = {
    newCategory,
    findAllCategory,
};