const mongoose= require('mongoose')
const {playlistSchema} = require('./playlist')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 255
    },
    username: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }, 
    date: {
        type: Date,
        default: Date.now()
    },
    playlist: [playlistSchema]
})

const User= mongoose.model('User', userSchema);
module.exports=User;