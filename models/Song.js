const mongoose = require('mongoose')


const {Schema} = mongoose

const SongSchema = new Schema({
    number : {
        type : Number, 
        required : true,
    },
    title : {
        type : String, 
        required : true,
    },
    duration : {
        type : Number, 
        required : true,
    },
    author : {
        type : Schema.Types.ObjectId, 
        ref : 'author',
    }
})

module.exports = mongoose.model('song',SongSchema)