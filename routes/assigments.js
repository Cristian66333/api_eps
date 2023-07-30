const route = require('express').Router()

const {
    index,
    findByID,
    save,
    update,
    erase
} = require('../controllers/control-assignment')

route.get('/',index)
route.post('/:id_doctor&:id_office',save)
route.get('/:id',findByID)
route.put('/:id',update)
route.delete('/:id',erase)

module.exports = route;
