require('dotenv');
const jsonWebToken = require('jsonwebtoken');

const createToken = (email) => {
    const token = jsonWebToken.sign({ email }, process.env.JWT_SECRET);
    return token;
};

module.exports = {
    createToken,
};