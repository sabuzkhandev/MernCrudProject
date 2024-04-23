// Basic Lib Import
const express = require('express')
const router = require('./src/routes/api')
const app = new express()
const bodyParser = require('body-parser')
const path = require('path')

// Security Middleware Lib Import
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')

// Database Lib Import
const mongoose = require('mongoose')
app.use(express.static('client/build'))

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
app.use(limiter)

// Mongo DB Database Connection
const URI = 'mongodb://localhost:27017/Crud'

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connection Success')
  })
  .catch((error) => {
    console.error('Connection Error:', error)
  })

// Routing Implement
app.use('/api', router)

// Add React Front End Routing
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

module.exports = app
