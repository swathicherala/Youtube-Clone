const mongoose = require('mongoose')
const appConfig = require('./appConfig')

const connect = async () => {
    try {
        const conn = await mongoose.connect(appConfig.mongoURI)
        console.log(`Mongodb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connecting to Mongodb: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connect