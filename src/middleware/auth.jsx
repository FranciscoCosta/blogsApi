const validateAuth = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

module.exports = {
    validateAuth,
};