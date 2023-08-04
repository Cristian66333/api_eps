const mongoose = require('mongoose')

// Obtener el objeto Schema de Mongoose
const {Schema} = mongoose

// Definir el esquema de asignación
const SpecialitySchema = new Schema({
    numberId :{
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    }
})

// Exportar el modelo de asignación
module.exports = mongoose.model('speciality', SpecialitySchema)