require('dotenv');
const jsonWebToken = require('jsonwebtoken');

const createToken = (email) => {
    const token = jsonWebToken.sign({ email }, process.env.JWT_SECRET);
    return token;
};

const validateToken = (token) => {
    try {
        const decoded = jsonWebToken.verify(token, process.env.JWT_SECRET);
        return { error: null, decoded };
    } catch (_error) {
        const error = new Error('Expired or invalid token');
        return { error, decoded: null };
    }
};

module.exports = {
    createToken,
    validateToken,
};