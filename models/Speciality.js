const mongoose = require('mongoose')

const {Schema} = mongoose

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

module.exports = mongoose.model('speciality', SpecialitySchema)