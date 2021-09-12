const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const setCORS  = require('./middleware/cors.middleware')

const PORT = config.get('serverPort')
const DATA_BASE_URL = config.get('dataBaseUrl')

const app = express()

app.use(setCORS)
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/files',fileRouter)

const start = async () => {
    try {
        mongoose.connect(DATA_BASE_URL).then(()=> {
            console.log('base connected');
        })

        app.listen(PORT, () => {
            console.log('Server started on ' + PORT + ' port.');
        })
    } catch (e) {
        throw new Error(e)
    }
}

start()