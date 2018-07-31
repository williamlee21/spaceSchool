const express = require("express")
const app = express()
const {db} = require('./db')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const {Student, School} = require('./db/models')


var schema = buildSchema(`
    type Query  {
        getStudent(id:Int!): [Student]
        getSchool: School
    }

    type Student {
        id:ID
        name: String
        grade: String
        schoolId: ID
    }    
    type School {
        id: ID
        name:String
        description: String
        updatedAt: String
        student: Student
    }
`)
 var root = {
    getStudent: (args) => {
       if (args.id) {
           return Student.findAll({where:{schoolId: args.id}})
       } else {
        return Student.findAll()
       }


    },
    getSchool: () => {
        return School.findOne({where:{id: 1}})
    }
     
 }

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))
app.get('/', (req, res) => res.send('Hello World'))

db.sync()
    .then(()=>{
        console.log('db synced')
        app.listen(3000, () => console.log("Listening on port 3000"))
    })