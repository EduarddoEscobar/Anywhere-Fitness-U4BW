const { Router } = require('express');
const router = Router();
const Roles = require('./roles-model');
const {
    roleNameFree,
    roleExists,
    validatePayload
} = require('./roles-middleware');

router.get('/', (req, res, next) => {
    Roles.getAll()
        .then(roles => {
            res.status(200).json(roles);
        }).catch(next);
})

router.get('/:id', roleExists, (req, res, next) => {
    Roles.getById(req.params.id)
        .then(role => {
            res.status(200).json(role);
        }).catch(next);
})

router.post('/', validatePayload, roleNameFree, (req, res, next) => {
    Roles.add({role_name: req.body.role_name})
        .then(role => {
            res.status(201).json(role);
        }).catch(next);
})

router.put('/:id', validatePayload, roleExists, (req, res, next) => {
    Roles.update(req.params.id, req.body.role_name)
        .then(role => {
            res.status(200).json(role);
        }).catch(next);
})

router.delete('/:id', roleExists, (req, res, next) => {
    Roles.remove(req.params.id)
        .then(role => {
            res.status(200).json({
                message: 'Role successfully removed',
                role
            })
        }).catch(next);
})

module.exports = router;