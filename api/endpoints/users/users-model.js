const db = require('../../data/db-config');

function getAll() {
    return db('users as u')
        .leftJoin('roles as r', 'u.role_id', 'r.role_id')
        .select('u.user_id', 'u.username', 'r.role_name');
}

function getByUsername(username) {
    return db('users')
        .where({
            username
        })
        .first();
}

function getById(id) {
    return db('users as u')
        .leftJoin('roles as r', 'u.role_id', 'r.role_id')
        .select('u.user_id', 'u.username', 'r.role_name')
        .where('u.user_id', id)
        .first();
}

function getByRole(role) {
    return db('users as u')
        .leftJoin('roles as r', 'u.role_id', 'r.role_id')
        .select('u.user_id', 'u.username', 'r.role_name')
        .where('r.role_name', role)
}

async function add(user) {
    let [id] = await db('users').insert(user);
    return getById(id);
}

async function update(id, changes) {
    await db('users').update(changes).where('user_id', id);
    return getById(id);
}

async function remove(id) {
    let user = await getById(id);
    await db('users').where('user_id', id).del();
    return user;
}

module.exports = {
    getAll,
    getById,
    getByRole,
    getByUsername,
    add,
    update,
    remove
}