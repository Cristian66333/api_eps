const route = require('express').Router()

const {
    index,
    findByID,
    save,
    update,
    erase
} = require('../controllers/control-doctors')

route.get('/',index)
route.post('/',save)
route.get('/:id',findByID)
route.put('/:id',update)
route.delete('/:id',erase)

module.exports = route;
