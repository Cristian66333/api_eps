const mongoose = require('mongoose')

// Obtener el objeto Schema de Mongoose
const {Schema} = mongoose

// Definir el esquema de asignación
const OfficeSchema = new Schema({
    numberOffice :{
        type : String,
        require : true
    },
    floor : {
        type : String,
        require : true
    },
    assignments : [
        {
            type : Schema.Types.ObjectId,
            ref : 'assigment'
        }
    ]
})

// Exportar el modelo de asignación
module.exports = mongoose.model('office', OfficeSchema)