
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('recipeName', 128).notNullable()
        tbl.text('instructions').notNullable()
    }).createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('ingredientName', 128).notNullable()
    }).createTable('recipesIngredients', tbl => {
        tbl.integer('recipeId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        tbl.integer('ingredientId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            tbl.text('quantity', 128)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipesIngredients').dropTableIfExists('Ingredients').dropTableIfExists('recipes')
};
