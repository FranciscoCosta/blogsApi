const { User } = require('../models');
const { createToken } = require('../utils/createToken.jsx');

const newUser = async ({ displayName, email, password, image }) => {
    const verifyUser = await User.findAll({
        where: { email },
    });

    if (verifyUser.length !== 0) return { error: 'User already registered', token: null };

    await User.create({ displayName, email, password, image });

    const token = createToken(email);

    return { error: null, token };
};

const findAllUser = async () => {
    const users = User.findAll({
        attributes: { exclude: ['password'] },  
    });
    return users;
};

module.exports = {
    newUser,
    findAllUser,
};