const express = require('express');

const { validateAuth } = require('../middleware/auth.jsx');
const { createToken } = require('../controllers/auth.jsx');

const router = express.Router();

router.post('/login', validateAuth, createToken);

module.exports = router;