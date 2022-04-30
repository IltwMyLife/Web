const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db')
const router = require('./routes/index')
const multer = require('multer')
const path = require('path')

const PORT = process.env.PORT || 9000

connectDB()

const app = express()

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "static/images")))
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})