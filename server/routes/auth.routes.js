const Router = require('express')
const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const SECRET_KEY = config.get('secretKey')
const authMiddleware = require('../middleware/auth.middleware')
const FileService = require('../services/fileService')
const File = require('../models/File')

const router = new Router()


router.post('/registration', 
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Password must be longer then 4 and shorter than 15').isLength({min: 4, max: 15})
    ]
    ,async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Incorrect request', errors})
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: `User ${email} already exists`})
            }

            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({email, password: hashPassword})
            await user.save()

            const file = new File({user: user.id, name: ''}) 
            await FileService.createDir(file)

            return res.status(200).json({message: 'User was created'})
        } catch (e) {
            console.error(e);
            res.status(500).send({message: 'Server error'})
        }
    }
)

router.post('/login', async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})

            if (!user) {
                return res.status(404).json({message: 'User not found'})
            }

            const isPassValid = await bcrypt.compare(password, user.password)

            if (!isPassValid) {
                return res.status(400).json({message: 'Incorrect password'})
            }

            const token = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: '24h'})

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.error(e);
            res.status(500).send({message: 'Server error'})
        }
    }
)


router.get('/auth', authMiddleware, async (req, res) => {
        try {
            const user = await User.findOne({id: req.user.id})

            const token = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: '24h'})

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.error(e);
            res.status(500).send({message: 'Server error'})
        }
    }
)

module.exports = router
