const mongoose = require('mongoose')

const {Schema} = mongoose

const AuthorSchema = new Schema({
    id :{
        type : String, 
        required : true,
        unique : true
    },
    name : {
        type : String, 
        required : true
    },
    birthday : {
        type : Date, 
        required : false,
    },
    songs : [
        {
            type : Schema.Types.ObjectId, 
            ref : 'song'
        }
    ]
})

module.exports = mongoose.model('author',AuthorSchema)