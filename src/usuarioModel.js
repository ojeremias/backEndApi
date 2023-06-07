const {Sequelize, DataTypes} = require('sequelize')
const db = require('./db')

const Usuario = db.define('Usuario', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        unique: true,
    },
    password:{
        type: DataTypes.STRING(40),
        allowNull: false
    }
},{

})

module.exports = Usuario