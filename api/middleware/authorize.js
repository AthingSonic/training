const jwt  = require('jsonwebtoken')
// require('dotenv').config()

const authorize  = (req, res, next)=>{
    // get token from header
    // const token = req.header('token')
    const token = req.cookies.token
    console.log("========>",token);

    if(!token){
        return res.status(403).json({
            message: "authorization denied"
        })
    }

    // verify token
    try {
        // it is going to give the user id (user:{id: user.id})
        const verify = jwt.verify(token, process.env.jwt_secret_key)
        req.user = verify.user
        next()
    } catch (error) {
        req.status(401).json({
            message: "token is not valid"
        })
    }
} 

module.exports = authorize