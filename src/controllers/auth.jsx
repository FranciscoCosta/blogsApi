const serviceAuth = require('../services/auth.jsx');

const createToken = async (req, res) => {
    const { email, password } = req.body;
    const result = await serviceAuth.createToken(email, password);
    if (result.error) {
        res.status(400).json({ message: result.error });
        return;
    }
    const { token } = result;

    res.status(200).json({ token });
};

module.exports = {
    createToken,
};