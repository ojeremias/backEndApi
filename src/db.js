const { Sequelize } = require('sequelize');
/**
 * database
 * user
 * password
 */
const dbSequelize = new Sequelize('usuario', 'aluno.ifal', 'aluno.ifal', {
    dialect: 'mysql', host: 'localhost'
});


module.exports = dbSequelize;