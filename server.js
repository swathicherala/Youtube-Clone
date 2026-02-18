const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const connectDb = require('./src/config/dbConnect')
connectDb()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})