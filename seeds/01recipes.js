
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipeName: 'Mac n cheese', instructions: 'you gotta do all kindsa stuff'},
        { recipeName: 'Yummy yummy food', instructions: 'good luck'},
        { recipeName: 'the third thing is down here', instructions: 'good luck'}
      ]);
    });
};
