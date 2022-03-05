const db = require('../../data/db-config');

function getAll() {
    return db('roles');
}

function getById(role_id) {
    return db('roles').where({ role_id }).first();
}

function getByName(role_name) {
    return db('roles').where({ role_name }).first();
}

async function add(role) {
    let [newRole] = await db('roles').insert(role, ['role_id', 'role_name']);
    return newRole;
}

async function update(role_id, role_name) {
    await db('roles').update({ role_name }).where({ role_id });
    return {
        role_id,
        role_name
    }
}

async function remove(role_id) {
    let role = await getById(role_id);
    await db('roles').where({ role_id }).del();
    return role;
}

module.exports = {
    getAll,
    getById,
    getByName,
    add,
    update,
    remove
}