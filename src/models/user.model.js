const mongoose = require('mongoose')
 
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        lowercase: true,
        index: true,
        trim: true
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName:{
        type: String,
        required: [true, 'Fullname is required'],
        index: true
    },
    avatar:{
        public_id: String,
        url: String
    },
    coverImage:{
        public_id: String,
        url: String
    },
    password:{
        type: String,
        require: [true, 'Password is required'],
        minLength: [8, 'Password must be at least 8 characters']
    },
    refreshToken:{
        type: String
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    isVerified: {
        type: Boolean,
        default: false
    },
    //Channel specific fields
    channelDescription: {
        type: String,
        default: "",
    },
    channelTags: {
        type: [Strings],
        default: []
    },
    socialLinks: {
        x: String,
        instagram: String,
        facebook: String,
        website: String
    },
    notificationSettings: {
        emailNotification: {
            type: Boolean,
            default: true
        },
        subscriptionActivity: {
            type: Boolean,
            default: true
        },
        commentActivity: {
            type: Boolean,
            default: true
        }
    },
    //Password reset fields
    refreshPasswordToken: String,
    resetPasswordToken: String,
    //Admin role
    isAdmin:{
        type: Boolean,
        default: false
    }
}, {timestamps:true})

const User = mongoose.model('User', userSchema)
modules.exports = User