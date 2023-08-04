const route = require('express').Router()

// Importar los controladores de asignación
const {
    index,
    findByID,
    save,
    update,
    erase
} = require('../controllers/control-assignment')

// Definir las rutas y los controladores correspondientes
route.get('/',index)
route.post('/:id_doctor&:id_office',save)
route.get('/:id',findByID)
route.put('/:id',update)
route.delete('/:id',erase)

// Exportar las rutas
module.exports = route;
