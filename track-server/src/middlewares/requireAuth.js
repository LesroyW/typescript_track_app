const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    //authorization === 'Bearer sfsdfsfdfsdfsdsfsd'

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in.' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, /'Secret Key Value'/ , async (err, payload) => {

        if (err) {
            return res.status(401).send({ error: 'You must be logged in.' });
        }

        const { userId } = payload;

        const user = await User.findById(userId);
        req.user = user;
        next();
    });
};