
exports.seed = function(knex) {
  // Deletes ALL existing entries and updates ids
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredientName: 'mac'},
        {ingredientName: 'cheese'},
        {ingredientName: 'innocent programmers'}
      ]);
    });
};
