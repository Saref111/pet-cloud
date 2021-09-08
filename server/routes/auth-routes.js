const Router = require('express')
const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const {check, validationResult} = require('express-validator')

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

            const hashPassword = await bcrypt.hash(password, 15)
            const user = new User({email, password: hashPassword})
            await user.save()

            return res.json({message: 'User was created'})
        } catch (e) {
            console.error(e);
            res.status(500).send({message: 'Server error'})
        }
    }
)

module.exports = router
