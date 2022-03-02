/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('categories').insert([{
      category_name: 'yoga'
    },
    {
      category_name: 'insanity'
    },
    {
      category_name: 'RIPPED'
    },
    {
      category_name: 'pilates'
    },
    {
      category_name: 'spin'
    },
    {
      category_name: 'beginner'
    }
  ]);
};