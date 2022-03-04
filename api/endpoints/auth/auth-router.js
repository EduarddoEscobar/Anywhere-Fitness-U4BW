const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const {
    usernameFree,
    validatePayload,
    generateToken
} = require('./auth-middleware');

router.post('/register', validatePayload, usernameFree, (req, res, next) => {
    let {
        username,
        password,
        role_id
    } = req.user;
    password = bcrypt.hashSync(password, 12);
    Users.add({
            username,
            password,
            role_id
        })
        .then(user => {
            res.status(201).json(user);
        }).catch(next);
})

router.post('/login', validatePayload, (req, res, next) => {
    let {
        username,
        password
    } = req.user;
    Users.getByUsername(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome back ${user.username}`,
                    token
                })
            } else {
                next({
                    status: 401,
                    message: 'Invalid credentials'
                });
            }
        }).catch(next);
})

module.exports = router;