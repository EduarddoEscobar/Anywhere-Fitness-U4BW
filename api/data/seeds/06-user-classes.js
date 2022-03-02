/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('user_classes').insert([{
      user_id: 3,
      class_id: 1
    },
    {
      user_id: 4,
      class_id: 1
    },
    {
      user_id: 5,
      class_id: 1
    },
    {
      user_id: 6,
      class_id: 1
    },
    {
      user_id: 7,
      class_id: 1
    },
    {
      user_id: 7,
      class_id: 2
    },
    {
      user_id: 3,
      class_id: 3
    },
    {
      user_id: 6,
      class_id: 3
    }
  ]);
};