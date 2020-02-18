
exports.seed = function(knex) {
  // Deletes ALL existing entries
  console.log('im running')
  return knex('recipesIngredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipesIngredients').insert([
        {recipeId: 1, ingredientId: 2, quantity: 'at least 5' },
        {recipeId: 1, ingredientId: 3, quantity: 'soemthing like 50'},
        {recipeId: 1, ingredientId: 1, quantity: '1'}, 
      ]);
    });
};
