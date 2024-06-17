const jwt = require('jsonwebtoken')
// require('dotenv').config()

function jwtGenerator(user_id){
    const payload = {
        user: {
            id: user_id
        }
    }
    return jwt.sign(payload, process.env.jwt_secret_key, {expiresIn: '1h'})
}

module.exports = jwtGenerator