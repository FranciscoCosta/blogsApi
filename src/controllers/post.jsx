const { getAllPostS } = require('../services/post.jsx');

const getAllPost = async (_req, res) => {
    const result = await getAllPostS();
    return res.status(200).json(result);
};

module.exports = {
    getAllPost,
};
