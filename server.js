
const mongoose = require('mongoose')
require('dotenv').config()
require('./app.js')
const mongoDB = process.env.DATABASE_URL
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose Getting Error ${err}`)
})
mongoose.connection.on('open', () => {
    console.log(`MongoDb Database Connected `)
})
mongoose.connection.on('disconnect', () => {
    console.log(`Mongoose Disconnected `)
})

require('./model/user.model')
require('./model/category.model')
require('./model/post.model')
