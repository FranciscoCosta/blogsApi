const express = require('express');

const { getAllPost } = require('../controllers/post.jsx');
const { validateTokenM } = require('../middleware/token.jsx');

const router = express.Router();

router.get('/post', validateTokenM, getAllPost);

module.exports = router;