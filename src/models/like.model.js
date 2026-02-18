const mongoose = require('mongoose')
 
const likeSchema = new mongoose.Schema({
    video:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    },
    comment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    likedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps:true})

//Endure that a 'like' must refer to either a video or a comment, but not both
likeSchema.pre('save',function(next){
    if(!this.video && !this.comment){
        const error = new Error('A like must refer to either a video or a comment')
        return next(error)
    }
    if(this.video && this.comment){
        const error = new Error('A like must refer to either a video or a comment, but not both')
        return next(error)
    }
    next()
})

//Compound index to ensure a user can only like a video or comment once
likeSchema.index({video:1, likedBy:1},{unique: true, sparse: true})
likeSchema.index({comment:1, likedBy:1},{unique: true, sparse: true})

const Like = mongoose.model('Like', likeSchema)
modules.exports = Like