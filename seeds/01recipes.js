
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipeName: 'Mac n cheese'},
        { recipeName: 'Yummy yummy food'},
        { recipeName: 'the third thing is down here'}
      ]);
    });
};
