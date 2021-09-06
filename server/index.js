const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const PORT = config.get('serverPort')
const DATA_BASE_URL = config.get('dataBaseUrl')

const app = express()

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