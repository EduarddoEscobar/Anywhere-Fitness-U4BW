/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('classes').insert([{
      class_name: 'CBUM\'s cardio',
      start_time: '9:35AM',
      class_duration: '60m',
      intensity_level: 'Medium',
      class_location: 'YMCA',
      full: false,
      class_attendees: 0,
      max_size: 5,
      category_id: 5
    },
    {
      class_name: 'Road to olympia',
      start_time: '6:00AM',
      class_duration: '4h',
      intensity_level: 'INTENSE',
      class_location: 'Gold\'s Gym',
      full: false,
      class_attendees: 0,
      max_size: 2,
      category_id: 3
    },
    {
      class_name: 'Double olympian special',
      start_time: '8AM',
      class_duration: '2h',
      intensity_level: 'Hard',
      class_location: 'Muscle Beach',
      full: false,
      class_attendees: 0,
      max_size: 3,
      category_id: 2
    }
  ]);
};