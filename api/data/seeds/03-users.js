/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('users').insert([{
      username: 'CBUM',
      password: 'password1',
      role_id: 2
    },
    {
      username: 'ColemanR',
      password: 'password3',
      role_id: 2
    },
    {
      username: 'IVal',
      password: 'password4',
      role_id: 1
    },
    {
      username: 'JCruz',
      password: 'password6',
      role_id: 1
    },
    {
      username: 'SCruz',
      password: 'password6',
      role_id: 1
    },
    {
      username: 'EEscobar',
      password: 'password2',
      role_id: 1
    },
    {
      username: 'MEscobar',
      password: 'password5',
      role_id: 1
    },
    {
      username: 'BEscobar',
      password: 'password5',
      role_id: 1
    }
  ]);
};