var Sequelize = require ('sequelize')

// Store your username and password in the NODE_USERNAME and NODE_PASSWORD env variables, respectively
function createConnection() {
    return new Sequelize ('meal_kitty', process.env.NODE_USERNAME, process.env.NODE_PASSWORD,  {
        host: 'localhost',
        dialect: 'mysql'
    })
}

module.exports = {
    createConnection: createConnection
}