var models = require ('../models/recipe.js')
var fetch = require ('isomorphic-fetch')
var APP_ID = '7958560c'
var APP_KEY = 'ebc302a197b8986243f68b09abe956fe'

function generate_api_url (app_id, app_key, query, from, to) {
    return `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${query}&from=${from}&to=${to}`
}

function load_recipes() {
    var url = generate_api_url(APP_ID, APP_KEY, 'food', 0, 75)
    fetch(url)
        .then(function (response){
            return response.json()
        })
        .then(function (json) {
            json.hits.forEach(function(item) {
                models.Recipe.create({
                    label: item.recipe.label,
                    url: item.recipe.url
                }).then(function (recipe) {
                    //Get all of the ingredients in this recipe
                    item.recipe.ingredients.forEach(function (ingredient) {
                        models.Ingredient.create({
                            text: ingredient.text,
                            recipe_id: recipe.id
                        })
                    })

                    //Get all of the cautions
                    item.recipe.cautions.forEach(function (caution) {
                        models.CautionLabel.create({
                            text: caution,
                            recipe_id: recipe.id
                        })
                    })

                    //Get all of the health labels
                    item.recipe.healthLabels.forEach(function (health_label) {
                        models.HealthLabel.create({
                            text: health_label,
                            recipe_id: recipe.id
                        })
                    })
                })
            })
        } )
}

module.exports = load_recipes