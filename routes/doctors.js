const route = require('express').Router()

// Importar los controladores de asignación
const {
    index,
    findByID,
    save,
    update,
    erase
} = require('../controllers/control-doctors')

// Definir las rutas y los controladores correspondientes
route.get('/',index)
route.post('/',save)
route.get('/:id',findByID)
route.put('/:id',update)
route.delete('/:id',erase)

// Exportar las rutas
module.exports = route;
