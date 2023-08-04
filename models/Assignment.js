const mongoose = require('mongoose')

// Obtener el objeto Schema de Mongoose
const { Schema } = mongoose

// Definir el esquema de asignación
const AssignmentSchema = new Schema({
    documentDoctorId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor',
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    inicio: {
        type: Date,
        require: true
    },
    fin: {
        type: Date,
        require: true
    }
})

// Exportar el modelo de asignación
module.exports = mongoose.model('assigment', AssignmentSchema)