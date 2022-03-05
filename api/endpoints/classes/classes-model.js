const db = require('../../data/db-config');

function getAll(){
    return db('classes').select('class_id', 'class_name', 'start_time', 'class_duration', 'max_size');
}

function getById(class_id){
    return db('classes').where({ class_id }).first();
}

function getBy(filter){
    return db('classes').where(filter);
}

async function add(classToAdd){
    let [newClass] = await db('classes').insert(classToAdd, ['class_id', 'class_name', 'start_time', 'max_size']);
    return newClass;
}

async function update(class_id, changes){
    await db('classes').update(changes).where({ class_id });
    return getById(class_id);
}

async function remove(class_id){
    let classToRemove = await getById(class_id);
    await db('classes').where({ class_id }).del();
    return classToRemove;
}
module.exports = {
    getAll,
    getById,
    getBy,
    add,
    update,
    remove
}