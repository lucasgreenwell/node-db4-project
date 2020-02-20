const db = require('./dbconfig');

function getRecipes () {
   return db('recipes').select('*')
}

function getShoppingList (recipeId) {
   return db('recipesIngredients')
        .join('ingredients', 'recipesIngredients.ingredientId', '=', 'ingredients.Id')
        .select('ingredientName').where({recipeId: recipeId})
 }

 function getInstructions(id){
    return db('recipes').select('instructions').where({id: id})
 }

module.exports ={
    getRecipes, getShoppingList, getInstructions
}
