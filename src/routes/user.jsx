const express = require('express');

const { newUser } = require('../controllers/user.jsx');
const { validateUser } = require('../middleware/user.jsx');

const router = express.Router();

router.post('/user', validateUser, newUser);

module.exports = router;