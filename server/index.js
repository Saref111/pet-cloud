const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth-routes')

const PORT = config.get('serverPort')
const DATA_BASE_URL = config.get('dataBaseUrl')

const app = express()

app.use(express.json())
app.use('/api/auth',authRouter)
// app.get('/', (req, res) => {
//     res.json({test: 'test'})
// })

const start = async () => {
    try {
        mongoose.connect(DATA_BASE_URL)

        app.listen(PORT, () => {
            console.log('Server started on ' + PORT + ' port.');
        })
    } catch (e) {
        throw new Error(e)
    }
}

start()