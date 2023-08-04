const route = require('express').Router()

// Importar los controladores de asignación
const {
    index,
    save,
    findById
} = require('../controllers/control-offices')

// Definir las rutas y los controladores correspondientes
route.get('/',index)
route.post('/',save)
route.get('/:id',findById)

// Exportar las rutas
module.exports = route;
