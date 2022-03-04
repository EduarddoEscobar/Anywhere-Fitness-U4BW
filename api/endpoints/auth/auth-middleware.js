const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');

async function usernameFree(req, res, next) {
    let { username } = req.user;
    let user = await Users.getByUsername(username);
    if (user) {
        next({
            status: 400,
            message: `Username: ${username.trim()} is already taken`
        });
    } else {
        next();
    }
}

function validatePayload(req, res, next) {
    let {
        username,
        password,
        auth_code
    } = req.body;
    if (typeof username === 'string' && typeof password === 'string' && username.trim() && password.trim()) {
        req.user = {
            username: username.trim(),
            password: password.trim(),
            role_id: auth_code ? 2 : 1
        }
        next();
    } else {

    }
}

function generateToken(user) {
    let payload = {
        subject: user.user_id,
        username: user.username,
        role_id: user.role_id
    }

    return jwt.sign(payload, process.env.SECRET, {
        expiresIn: '1d'
    });
}

module.exports = {
    usernameFree,
    validatePayload,
    generateToken
}