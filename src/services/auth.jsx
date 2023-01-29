const authToken = require('../utils/createToken.jsx');
const { User } = require('../models');

const createToken = async (email, password) => {
    const user = await User.findAll({
        where: {
            password,
            email,
        },
    });

    if (user.length === 0) return { error: 'Invalid fields', token: null };

    const token = authToken.createToken(email);

    return { error: null, token };
};
module.exports = {
    createToken,
};