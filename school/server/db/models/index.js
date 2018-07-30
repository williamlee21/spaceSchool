const School = require('./school')
const Student = require('./student')

School.hasMany(Student)

module.exports = {
    School,
    Student
}