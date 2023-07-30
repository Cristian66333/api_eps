const route = require('express').Router()

const {
    index,
    save,
    findById
} = require('../controllers/control-offices')

route.get('/',index)
route.post('/',save)
route.get('/:id',findById)


module.exports = route;
