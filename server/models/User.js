const {Schema, model, Types: {ObjectId}} = require('mongoose')

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    diskSpace: {type: String, required: true, default: 1024**3*10},
    usedSpace: {type: String, required: true, default: 0},
    avatar: {type: String},
    files: [{type: ObjectId, ref: 'File'}]
})

module.exports = model('User', User)