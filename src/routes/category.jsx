const express = require('express');

const { newCategory, findAllCategory } = require('../controllers/Categories.jsx');
const { validateTokenM } = require('../middleware/token.jsx');
const { validateCategory } = require('../middleware/category.jsx');

const router = express.Router();

router.post('/categories', validateTokenM, validateCategory, newCategory);
router.get('/categories', validateTokenM, findAllCategory);

module.exports = router;