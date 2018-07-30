const router = require('express').Router()
const {Student} = require('../db/models')

router.get('/', (req, res, next) => {
    Student.findAll()
    .then(events => res.status(200).send(events))
    .catch(next)
})

module.exports = router