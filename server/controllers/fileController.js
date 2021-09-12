const path = require('path')
const File = require('../models/File')
const FileService = require("../services/fileService");


class FileController {
    async createDir(req, res) {
        try {
            const {name, type, parent = req.user.id} = req.body

            const file = new File({name, type, parent, user: req.user.id})
            const parentFile = await File.findOne({_id: parent})
            
            if (!parentFile) {
                file.path = name
                await FileService.createDir(file)
            } else {
                file.path = path.join(parentFile.path, name)
                await FileService.createDir(file)
                parentFile.children.push(file._id)
                await parentFile.save()
            }

            await file.save()

            return res.json(file)
        } catch (error) {
            console.error(error);
            return res.status(400).json(error)
        }
    }

    async fetchFiles(req, res) {
        try {
            const files = await File.find({user: req.user.id, parent: req.query.parent ? req.query.parent : req.user.id})
            return res.json({files})
        } catch (error) {
            console.error(error);
            return res.code(400).json({message: `Can't get files`})
        }
    }
}

module.exports = new FileController()