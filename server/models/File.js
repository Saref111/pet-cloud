const {Schema, model, ObjectId} = require('mongoose')

const File = new Schema({
    name: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    size: {type: Number, required: true},
    user_id: {type: ObjectId, ref: 'User', required: true},
    parent_id: {type: ObjectId, ref: 'File', required: true},
    access_link: {type: String, required: true, unique: true},
})

module.export = model('File', File)