exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', (roles) => {
      roles.increments('role_id');
      roles.string('role_name', 200)
        .notNullable()
        .unique();
    })
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200)
        .notNullable()
      users.string('password', 200)
        .notNullable()
      users.timestamps(false, true)
      users.integer('role_id')
        .unsigned()
        .notNullable()
        .references('role_id')
        .inTable('roles')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('categories', (catagories) => {
      catagories.increments('category_id');
      catagories.string('category_name', 200)
        .notNullable()
        .unique();
    })
    .createTable('classes', (classes) => {
      classes.increments('class_id');
      classes.string('class_name', 200)
        .notNullable();
      classes.string('start_time', 200)
        .notNullable();
      classes.string('class_duration', 200)
        .notNullable();
      classes.string('intensity_level', 200)
        .notNullable();
      classes.string('class_location', 200)
        .notNullable();
      classes.boolean('full')
        .defaultTo(false);
      classes.integer('class_attendees')
        .unsigned()
        .notNullable()
        .defaultTo(0);
      classes.integer('max_size')
        .unsigned()
        .notNullable();
      classes.integer('category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('user_classes', (uClasses) => {
      uClasses.integer('class_id')
        .unsigned()
        .notNullable()
        .references('class_id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      uClasses.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      uClasses.primary(['class_id', 'user_id']);
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('user_classes')
    .dropTableIfExists('classes')
    .dropTableIfExists('categories')
    .dropTableIfExists('users')
    .dropTableIfExists('roles');

}