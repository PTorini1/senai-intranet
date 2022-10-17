const Sequelize = require('sequelize')

const sequelize = new Sequelize("database", "usuario", "senha!", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize