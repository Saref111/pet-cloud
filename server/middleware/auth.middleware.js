const jwt = require('jsonwebtoken')
const config = require('config')

const SECRET_KEY = config.get('secretKey')

function auth(req, res, next) {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }

        const decodedToken = jwt.verify(token, SECRET_KEY)
        req.user = decodedToken
        
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error'})
    }
}

module.exports = auth