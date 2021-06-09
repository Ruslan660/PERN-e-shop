const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Name
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // PASS
{
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
}
)