const { validateToken } = require('../utils/createToken.jsx');

const validateTokenM = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({ message: 'Token not found' });
        return;
    }

    const { error } = validateToken(token);

    if (error) {
        res.status(401).json({ message: 'Expired or invalid token' });
        return;
    }

    next();
};

module.exports = { validateTokenM };