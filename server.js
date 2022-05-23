
const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
require('./app.js')
const app = express();
const mongoDB = process.env.DATABASE_URL
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const mongoDB1 = process.env.DATABASE_URL1
mongoose.connect(mongoDB1, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose Getting Error ${err}`)
})
mongoose.connection.on('open', () => {
    console.log(`MongoDb Database Connected `,mongoDB)
})
mongoose.connection.on('open', () => {
    console.log(`MongoDb Database Connected `,mongoDB1)
})
mongoose.connection.on('disconnect', () => {
    console.log(`Mongoose Disconnected `)
})

