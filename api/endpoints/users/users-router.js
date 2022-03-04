const { Router } = require('express');
const router = Router();
const Users = require('./users-model');
const { validateUser, validatePayload } = require('./users-middleware');

router.get('/', (req, res, next) => {
    let role = req.query.role;
    if (!role) {
        Users.getAll()
            .then(users => {
                res.status(200).json(users);
            }).catch(next);
    } else {
        Users.getByRole(role)
            .then(users => {
                res.status(200).json(users);
            }).catch(next);
    }
})

router.get('/:id', validateUser, (req, res, next) => {
    Users.getById(req.params.id)
        .then(user => {
            res.status(200).json(user);
        }).catch(next);
})

router.put('/:id', validateUser, validatePayload, (req, res, next) => {
    Users.update(req.params.id, req.user)
        .then(user => {
            res.status(200).json(user);
        }).catch(next);
})

router.delete('/:id', validateUser, (req, res, next) => {
    Users.remove(req.params.id)
        .then(user => {
            res.status(200).json({
                message: 'User successfully removed',
                user
            });
        })
})

module.exports = router;