const Sequelize = require('sequelize')
const db = require('../db')

const student = db.define('student', {
    name: {
        type: Sequelize.STRING
    },
    grade: {
        type: Sequelize.STRING
    }
})

module.exports = student