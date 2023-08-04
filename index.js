const express = require('express')

// Importar el archivo de conexión a la base de datos
require('./drivers/connect-db')

const app = express()
const cors = require('cors')

// Configurar el puerto del servidor
app.set('PORT',process.env.PORT || 3000)
// Habilitar el uso de CORS
app.use(cors())
// Habilitar el análisis de JSON en las solicitudes
app.use(express.json())

// Rutas de la aplicación
app.use('/doctors', require('./routes/doctors'))
app.use('/offices', require('./routes/offices'))
app.use('/assigments', require('./routes/assigments'))
app.use('/specialities', require('./routes/specialities'))

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(app.get('PORT'), ()=>console.log(`Server listen to port ${app.get('PORT')}`))