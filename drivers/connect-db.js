const mongoose = require('mongoose')

// URL de conexión a la base de datos
const URL = "mongodb+srv://cristian:cristian@cluster0.j16t7eu.mongodb.net/office?retryWrites=true&w=majority"

mongoose.set('strictQuery',false)

// Configuración de opciones de conexión
const options = {
    useNewUrlParser:true, useUnifiedTopology:true
}

// Conexión a la base de datos
mongoose.connect(URL,options).then(()=>{
    console.log('Conectado a bd')
}).catch((e)=>{
    console.log(e)
})

// Exportar la instancia de Mongoose
module.exports = mongoose