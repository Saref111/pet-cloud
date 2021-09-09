function setCORS(req, res, next) {
    console.log(2);
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', ' GET, POST, PATCH, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
    next()
}

module.exports = setCORS