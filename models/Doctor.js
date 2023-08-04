const mongoose = require('mongoose')

// Obtener el objeto Schema de Mongoose
const {Schema} = mongoose

// Definir el esquema de asignación
const DoctorSchema = new Schema({
    documentId :{
        type : String,
        require : true,
        unique : true
    },
    name : {
        type : String,
        require : true
    },
    speciality :{
        type : Schema.Types.ObjectId,
        ref : 'speciality',
        require : true
    },
    medicalRecord : {
        type : String,
        require : true
    },
    user : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    rol : {
        type : String,
        require : false
    }
})

// Exportar el modelo de asignación
module.exports = mongoose.model('doctor', DoctorSchema)