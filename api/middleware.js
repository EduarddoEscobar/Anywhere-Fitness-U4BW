const jwt = require('jsonwebtoken');

const only = (role) => (req, res, next) => {
    
}

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            if(err){
                next({status: 401, message: 'token invalid'});
            }else{
                req.decodedToken = decodedToken;
                next();
            }
        })
    }else{
        next({status: 401, message: 'token required'});
    }
}

module.exports = {
    only,
    restricted
}