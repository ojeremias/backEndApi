

const { Sequelize } = require('sequelize');
/**
 * database
 * user
 * password
 */
const dbSequelize = new Sequelize('postgres://qkrzfcow:QE0r79SGB7Bv9eez1byBGk-x7P4xyDok@tyke.db.elephantsql.com/qkrzfcow');


module.exports = dbSequelize;