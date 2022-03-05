const { Router } = require('express');
const router = Router();
const Classes = require('./classes-model');

router.get('/', (req, res, next) => {
    Classes.getAll()
        .then(classes => {
            res.status(200).json(classes);
        }).catch(next);
})

router.get('/:id', (req, res, next) => {
    Classes.getById(req.params.id)
        .then(resClass => {
            res.status(200).json(resClass);
        }).catch(next);
})

router.post('/', (req, res, next) => {
    Classes.add(req.body)
        .then(resClass => {
            res.status(201).json(resClass);
        }).catch(next);
})

router.put('/:id', (req, res, next) => {
    Classes.update(req.params.id, req.body)
        .then(resClass => {
            res.status(200).json(resClass);
        }).catch(next);
})

router.delete('/:id', (req, res, next) => {
    Classes.remove(req.params.id)
        .then(resClass => {
            res.status(200).json({
                message: 'Class successfully removed',
                class: resClass
            })
        }).catch(next);
})

module.exports = router;