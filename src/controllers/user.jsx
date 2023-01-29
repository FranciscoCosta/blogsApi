const userService = require('../services/user.jsx');

const newUser = async (req, res) => {
    const user = req.body;

    const result = await userService.newUser(user);

    if (result.error) {
        return res.status(409).json({ message: result.error });
    } 
    const { token } = result;
    res.status(201).json({ token });
};

const findAllUser = async (_req, res) => {
    const result = await userService.findAllUser();
        return res.status(200).json(result);
};

module.exports = {
    newUser,
    findAllUser,
};