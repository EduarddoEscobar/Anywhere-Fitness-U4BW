const Roles = require('./roles-model');

async function roleNameFree(req, res, next) {
    let role = await Roles.getByName(req.body.role_name);
    if (role) {
        next({
            status: 400,
            message: `Role: ${role.role_name} already exists`
        });
    } else {
        next();
    }
}

async function roleExists(req, res, next) {
    let role = await Roles.getById(req.params.id);
    if (role) {
        next();
    } else {
        next({
            status: 404,
            message: `Role not found`
        });
    }
}

async function validatePayload(req, res, next) {
    let { role_name } = req.body;
    if (typeof role_name === 'string' && role_name.trim()) {
        req.role = {
            role_name: role_name.trim()
        };
        next();
    } else {
        next({
            status: 400,
            message: 'Role name needs to be filled out'
        })
    }
}

module.exports = {
    roleNameFree,
    roleExists,
    validatePayload
}