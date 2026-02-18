const mongoose = require('mongoose')
 
const playlistSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Playlist is required'],
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isPublic:{
        type: Boolean,
        default: true
    }
}, {timestamps:true})

const Playlist = mongoose.model('Playlist', playlistSchema)
modules.exports = Playlist