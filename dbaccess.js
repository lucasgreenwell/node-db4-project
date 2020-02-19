const db = require('./dbconfig');

function getRecipes () {
   return db('recipes').select('*')
}

function getShoppingList (recipeId) {
    knex('recipesIngredients')
        .join('ingredients', 'recipesIngredients.ingredientId', '=', 'ingredients.Id')
        .select('ingredientsName').where({recipeId: recipeId})
 }

 function getInstructions(id){
    return db('recipes').select('instructions').where({id: id})
 }

module.exports ={
    getRecipes, getShoppingList, getInstructions
}
