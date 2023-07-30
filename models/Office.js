const mongoose = require('mongoose')

const {Schema} = mongoose

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

module.exports = mongoose.model('office', OfficeSchema)