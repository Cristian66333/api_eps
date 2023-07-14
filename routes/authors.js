const route = require('express').Router()

const {
    index,
    save
} = require('../controllers/control-authors')

route.get('/',index)
route.post('/',save)

module.exports = route;
