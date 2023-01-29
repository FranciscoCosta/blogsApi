const express = require('express');

const { newUser, findAllUser } = require('../controllers/user.jsx');
const { validateUser } = require('../middleware/user.jsx');
const { validateTokenM } = require('../middleware/token.jsx');

const router = express.Router();

router.post('/user', validateUser, newUser);
router.get('/user', validateTokenM, findAllUser);

module.exports = router;