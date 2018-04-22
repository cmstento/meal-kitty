var Sequelize = require ('sequelize')
var utilities = require ('../db/utilities.js')

var connection = utilities.createConnection()
var Recipe = connection.define ('recipes',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: Sequelize.STRING,
        url: Sequelize.STRING
    },
    {
        timestamps: false,
        tableName: 'recipes'
    }
)

var HealthLabel = connection.define ('health_labels',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        text: Sequelize.STRING,
        recipe_id: Sequelize.INTEGER 
    },
    {
        timestamps: false,
        tableName: 'health_labels'
    }
)

var CautionLabel = connection.define ('caution_labels',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        text: Sequelize.STRING,
        recipe_id: Sequelize.INTEGER 

    },
    {
        timestamps: false,
        tableName: 'health_labels'
    }
)

var Ingredient = connection.define ('ingredients',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        text: Sequelize.STRING,
        recipe_id: Sequelize.INTEGER 
    },
    {
        timestamps: false,
        tableName: 'ingredients'
    }
)

module.exports= {
    Recipe: Recipe,
    HealthLabel:HealthLabel,
    CautionLabel: CautionLabel,
    Ingredient: Ingredient
}
