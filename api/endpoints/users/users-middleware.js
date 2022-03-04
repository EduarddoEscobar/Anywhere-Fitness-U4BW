const Users = require('./users-model');

async function validateUser(req, res, next) { 
    let user = await Users.getById(req.params.id);
    if(user){
        next();
    }else{
        next({status: 404, customMessage: 'User not found'})
    }
}

async function validatePayload(req, res, next) {
    let {username, password, role_id} = req.body;
    if(typeof username === 'string' && username.trim() && typeof password === 'string' && password.trim() && typeof role_id === 'number'){
        req.user = {username: username.trim(), password: password.trim(), role_id};
        next();
    }else{
        next({status: 400, message: 'All fields must be filled'});
    }
}

module.exports = {
    validateUser,
    validatePayload
}