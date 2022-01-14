const mongoose= require('mongoose')

const playlistSchema =  new mongoose.Schema({
    playlist_id:{
        type: String,
        required: true
    },
    playlist_name:{
        type: String,
        required: true
    },
    playlist_thumbnail: {
        type: String,
        required: true
    },
    playlist_channel:{
        type: String,
        required: true
    },
    video_total: {
        type: Number,
        required: true
    },
    video_watched: {
        type: [String]
    },
    hours_total: {
        type: Number,
        required: true
    },
    hours_watched: {
        type: Number,
        required: true,
        default: 0.0
    }
})

const Playlist= mongoose.model('Playlist', playlistSchema);
module.exports.playlistSchema=playlistSchema;
module.exports.Playlist=Playlist;