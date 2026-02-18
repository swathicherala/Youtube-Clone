const multer = require('multer')
const path = require('path')
const ApiError = require('../utils/ApiError')

//Configure storage
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads')
    },
    fileName: (req,file,cb) => {
        const uniqueSuffix = Date.now() + "_" +Math.round(Math.random() * 1e9)
        const ext = path.extname(file.originalname)
        cb(null, file.fieldname + "_" + uniqueSuffix + ext)
    }
})

//File filter
const fileFilter = (req, file, cb) => {
    //Accept videos or images
    if(file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/')){
        cb(null, true   )
    }else{
        cb(new ApiError(400, "Only videos and images are allowed"))
    }
}

//Export multer middleware
const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize: 100 * 1024 * 1024
    }
})

module.exports = upload